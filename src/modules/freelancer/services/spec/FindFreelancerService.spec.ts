import ICreateInfluencerLevelDTO from '../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

// Resolver problemas de servico
// Adicionar criacao de usuario

describe('FindBy Freelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});

	it('should be able to find freelancer by freelancer id', async () => {
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);
		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 2,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const result = await FindFreelancer.executeById(freelancer.id);

		expect(result).toEqual(freelancer);
	});

	it('should not be able to find freelancer by freelancer id', async () => {
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: level.id,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const result = await FindFreelancer.executeById(freelancer.id + 1);

		expect(result).toEqual(undefined);
	});
});
