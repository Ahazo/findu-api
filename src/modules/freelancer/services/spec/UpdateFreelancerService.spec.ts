import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import IUserRepository from '../../../user/repositories/IUserRepository';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import IFreelancerRepository from '../../repositories/IFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import UpdateFreelancerService from '../UpdateFreelancerService';

describe('UpdateFreelancer', () => {
	let fakeFreelancerRepository: IFreelancerRepository;
	let fakeUserRepository: IUserRepository;

	let createFreelancer: CreateFreelancerService;
	let updateFreelancer: UpdateFreelancerService;

	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeUserRepository = new FakeUsersRepository();

		createFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);

		updateFreelancer = new UpdateFreelancerService(fakeFreelancerRepository);
	});

	it('should be able to update', async () => {
		const freelancer = await createFreelancer.execute({
			user_id: 1,
			level_id: 1,
		});

		const updatedFreelancer = await updateFreelancer.execute({
			...freelancer,
			projects_count: 1,
		});

		expect(updatedFreelancer.projects_count).toBe(1);
	});
});
