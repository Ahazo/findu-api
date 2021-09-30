import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

describe('CreateFreelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});

	it('should be able to create freelancer', async () => {
		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateProfessionalLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 2,
			skill: {
				freelancer_id: 1,
				specialization_id: 1,
			},
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		expect(freelancer).toBeInstanceOf(Freelancer);
		//	expect(freelancer.level_id).toEqual(level.id);
	});
});
