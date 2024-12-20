import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';

describe('CreateFreelancer', () => {
	let fakeFreelancerRepository: FakeFreelancerRepository;

	let createFreelancer: CreateFreelancerService;

	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();

		createFreelancer = new CreateFreelancerService(fakeFreelancerRepository);
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

		await expect(createFreelancer.execute(freelancer)).rejects.toBeInstanceOf(
			Error
		);
	});
});
