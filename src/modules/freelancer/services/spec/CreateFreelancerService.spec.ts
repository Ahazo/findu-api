import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';

describe('CreateFreelancer', () => {
	let fakeFreelancerRepository: FakeFreelancerRepository;
	let fakeUserRepository: FakeUsersRepository;

	let createFreelancer: CreateFreelancerService;

	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeUserRepository = new FakeUsersRepository();

		createFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);
	});

	it('should be able to create freelancer', async () => {
		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		const freelancer = await createFreelancer.execute(freelancerData);

		expect(freelancer).toBeInstanceOf(Freelancer);
	});

	it('should not be able to create freelancer with the same user id', async () => {
		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		await createFreelancer.execute(freelancerData);

		const freelancerData1: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		await expect(
			createFreelancer.execute(freelancerData)
		).rejects.toBeInstanceOf(Error);
	});
});
