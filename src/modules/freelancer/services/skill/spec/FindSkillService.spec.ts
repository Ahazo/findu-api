import ICreateInfluencerLevelDTO from '../../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../../../user/dtos/ICreateUserDTO';
import FakeInfluencerLevelRepository from '../../../../user/infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUsersRepository from '../../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../../../user/providers/fakes/FakeHashProvider';
import CreateUserService from '../../../../user/services/CreateUserService';
import CreateInfluencerLevelService from '../../../../user/services/influencerLevel/CreateInfluencerLevelService';
import ICreateFreelancerDTO from '../../../dtos/ICreateFreelancerDTO';
import ICreateSkillDTO from '../../../dtos/ICreateSkillDTO';
import ICreateSpecializationDTO from '../../../dtos/ICreateSpecializationDTO';
import FakeFreelancerRepository from '../../../repositories/fakes/FakeFreelancerRepository';
import FakeSkillRepository from '../../../repositories/fakes/FakeSkillRepository';
import FakeSpecializationRepository from '../../../repositories/fakes/FakeSpecializationRepository';
import CreateFreelancerService from '../../CreateFreelancerService';
import CreateSpecializationService from '../../specialization/CreateSpecializationService';
import CreateSkillService from '../CreateSkillService';
import FindSkillService from '../FindSkillService';

describe('FindSkill', () => {
	let fakeSkillRepository: FakeSkillRepository;

	let findSkillService: FindSkillService;
	let createSkillService: CreateSkillService;

	beforeEach(() => {
		fakeSkillRepository = new FakeSkillRepository();
		createSkillService = new CreateSkillService(fakeSkillRepository);
		findSkillService = new FindSkillService(fakeSkillRepository);
	});

	it('should be able to find skill by its id', async () => {
		const skill = await createSkillService.execute({
			specialization_id: 1,
			freelancer_id: 1,
		});

		const find = await findSkillService.executeById(skill.id);

		expect(find).toEqual(skill);
	});

	it('should not be able to find skill by its wrong id', async () => {
		const skill = await createSkillService.execute({
			specialization_id: 1,
			freelancer_id: 1,
		});

		const unexistentId = skill.id + 1;
		const find = await findSkillService.executeById(unexistentId);

		expect(find).toEqual(undefined);
	});

	it('should be able to find all skills', async () => {
		await createSkillService.execute({
			specialization_id: 1,
			freelancer_id: 1,
		});

		await createSkillService.execute({
			specialization_id: 2,
			freelancer_id: 2,
		});

		const findAll = await findSkillService.executeAll();

		expect(findAll?.length).toEqual(2);
	});
});
