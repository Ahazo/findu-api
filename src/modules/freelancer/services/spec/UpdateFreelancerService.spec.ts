import ICreateInfluencerLevelDTO from '../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';
import UpdateFreelancerService from '../UpdateFreelancerService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

describe('UpdateFreelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});
});

// it('should be able to update work status', async () => {
// 	const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);
// 	const CreateFreelancer = new CreateFreelancerService(
// 		fakeFreelancerRepository
// 	);
// 	const CreateProfessionalLevel = new CreateProfessionalLevelService(
// 		fakeProfessionalLevelRepository
// 	);
// 	const UpdateFreelancer = new UpdateFreelancerService(
// 		fakeFreelancerRepository
// 	);
// 	const levelData: ICreateProfessionalLevelDTO = {
// 		description: 'Almost Professional Mighty',
// 		experience_needed: 1,
// 	};

// 	const level = await CreateProfessionalLevel.execute(levelData);

// 	const freelancerData: ICreateFreelancerDTO = {
// 		user_id: 1,
// 		level_id: 1,
// 		skill: {
// 			freelancer_id: 1,
// 			specialization_id: 1,
// 		},
// 	};

// 	const freelancer = await CreateFreelancer.execute(freelancerData);

// 	const updatedFreelancer =
// 		await UpdateFreelancer.execute(/* {freelancerId: freelancer.id,} */);

// 	expect(updatedFreelancer).toBeInstanceOf(Freelancer);
// 	expect(updatedFreelancer.open_to_work).toBe(false);

// it('should be able to update skills', async () => {
// 	const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

// 	const CreateFreelancer = new CreateFreelancerService(
// 		fakeFreelancerRepository
// 	);

// 	const CreateProfessionalLevel = new CreateProfessionalLevelService(
// 		fakeProfessionalLevelRepository
// 	);

// 	const UpdateFreelancer = new UpdateFreelancerService(
// 		fakeFreelancerRepository
// 	);

// 	const levelData: ICreateInfluencerLevelDTO = {
// 		description: 'Almost Mighty',
// 		experience_needed: 1,
// 	};

// 	const level = await CreateProfessionalLevel.execute(levelData);

// 	const freelancerData: ICreateFreelancerDTO = {
// 		user_id: 1,
// 		level_id: 1,
// 		skill: {
// 			freelancer_id: 1,
// 			specialization_id: 1,
// 		},
// 	};

// 	const freelancer = await CreateFreelancer.execute(freelancerData);

// 	const updatedFreelancer = await UpdateFreelancer.execute({
// 		freelancerId: freelancer.id,
// 		skill: 'Plantar bananeira',
// 	});

// 	expect(updatedFreelancer).toBeInstanceOf(Freelancer);
// 	expect(updatedFreelancer.skill).toBe('Plantar bananeira');
// });
// });
