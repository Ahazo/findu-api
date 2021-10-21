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
		expect(
			await createFreelancer.execute({
				user_id: 1,
				level_id: 1,
			})
		).toBeInstanceOf(Freelancer);
	});

	it('should not be able to create freelancer with the same user id', async () => {
		const freelancer = await createFreelancer.execute({
			user_id: 1,
			level_id: 1,
		});

		const freelancerWithTheSameLevel: ICreateFreelancerDTO = {
			...freelancer,
			user_id: 1,
		};

		await expect(
			createFreelancer.execute(freelancerWithTheSameLevel)
		).rejects.toBeInstanceOf(Error);
	});
});
