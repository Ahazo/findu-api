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
import FakeFreelancerRepository from '../../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeSkillRepository from '../../../infra/typeorm/repositories/fakes/FakeSkillRepository';
import FakeSpecializationRepository from '../../../infra/typeorm/repositories/fakes/FakeSpecializationRepository';
import CreateFreelancerService from '../../CreateFreelancerService';
import CreateSpecializationService from '../../specialization/CreateSpecializationService';
import CreateSkillService from '../CreateSkillService';
import FindSkillService from '../FindSkillService';

describe('FindSkill', () => {
	let fakeSkillRepository: FakeSkillRepository;
	let fakeSpecializationRepository: FakeSpecializationRepository;
	let fakeFreelancerRepository: FakeFreelancerRepository;
	let fakeUserRepository: FakeUsersRepository;
	let fakeHashProvider: FakeHashProvider;
	let fakeInfluencerLevelRepository: FakeInfluencerLevelRepository;

	let findSkillService: FindSkillService;

	let createSkillService: CreateSkillService;
	let createSpecializationService: CreateSpecializationService;
	let createFreelancerService: CreateFreelancerService;
	let createUserService: CreateUserService;
	let createInfluencerLevelService: CreateInfluencerLevelService;

	beforeEach(() => {
		fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();
		fakeSkillRepository = new FakeSkillRepository();
		fakeSpecializationRepository = new FakeSpecializationRepository();
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeUserRepository = new FakeUsersRepository();
		fakeHashProvider = new FakeHashProvider();

		createInfluencerLevelService = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);
		createUserService = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);
		createSkillService = new CreateSkillService(fakeSkillRepository);
		createSpecializationService = new CreateSpecializationService(
			fakeSpecializationRepository
		);
		createFreelancerService = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);

		findSkillService = new FindSkillService(fakeSkillRepository);
	});

	it('should be able to find skill by its id', async () => {
		const influencerLevelData: ICreateInfluencerLevelDTO = {
			description: 'Influencião',
			experience_needed: 8,
		};

		const influencerLevel = await createInfluencerLevelService.execute(
			influencerLevelData
		);

		const userData: ICreateUserDTO = {
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					house_number: 4,
					complement: 'na frente do poster de um cara gostoso',
					city: 'Sao Paulo',
					state: 'SP',
				},
				cpf: '493.726.168-18',
				email: 'scarano.dev@gmail.com',
				cellphone_number: '(11) 97801-3866',
				first_name: 'Lucca',
				last_name: 'Scarano',
				birth_date: new Date(),
			},
			username: 'batatinhaGames',
			password: 'batatinhaSenhas',
			level_id: influencerLevel.id,
		};

		const user = await createUserService.execute(userData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: user.id,
			level_id: 1,
		};

		const freelancer = await createFreelancerService.execute(freelancerData);

		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'doideras',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const skillData: ICreateSkillDTO = {
			specialization_id: specialization.id,
			freelancer_id: freelancer.id,
		};

		const skill = await createSkillService.execute(skillData);

		const find = await findSkillService.executeById(skill.id);

		expect(find).toEqual(skill);
	});

	it('should not be able to find skill by its wrong id', async () => {
		const skillData: ICreateSkillDTO = {
			specialization_id: 1,
			freelancer_id: 1,
		};

		const skill = await createSkillService.execute(skillData);

		const find = await findSkillService.executeById(skill.id + 1);

		expect(find).toEqual(undefined);
	});

	it('should be able to find all skills', async () => {
		const firstSkillData: ICreateSkillDTO = {
			specialization_id: 1,
			freelancer_id: 1,
		};

		const firstSkill = await createSkillService.execute(firstSkillData);

		const secondSkillData: ICreateSkillDTO = {
			specialization_id: 2,
			freelancer_id: 2,
		};

		const secondSkill = await createSkillService.execute(secondSkillData);

		const findAll = await findSkillService.executeAll();

		expect(findAll?.length).toEqual(2);
	});
});
