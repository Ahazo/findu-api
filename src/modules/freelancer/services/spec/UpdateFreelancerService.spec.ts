import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import IFreelancerRepository from '../../repositories/IFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import UpdateFreelancerService from '../UpdateFreelancerService';

describe('UpdateFreelancer', () => {
	let fakeFreelancerRepository: IFreelancerRepository;

	let createFreelancer: CreateFreelancerService;
	let updateFreelancer: UpdateFreelancerService;

	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();

		createFreelancer = new CreateFreelancerService(fakeFreelancerRepository);
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
