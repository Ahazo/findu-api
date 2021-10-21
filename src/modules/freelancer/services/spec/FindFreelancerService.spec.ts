import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeUserRepository: FakeUsersRepository;

let findFreelancer: FindFreelancerService;
let createFreelancer: CreateFreelancerService;

describe('FindBy Freelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeUserRepository = new FakeUsersRepository();
		findFreelancer = new FindFreelancerService(fakeFreelancerRepository);
		createFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);
	});

	it('should be able to find freelancer by freelancer id', async () => {
		const freelancer = await createFreelancer.execute({
			user_id: 1,
			level_id: 1,
		});

		expect(await findFreelancer.executeById(freelancer.id)).toEqual(freelancer);
	});

	it('should not be able to find freelancer by freelancer id', async () => {
		const freelancer = await createFreelancer.execute({
			user_id: 1,
			level_id: 1,
		});

		expect(await findFreelancer.executeById(freelancer.id + 1)).toEqual(
			undefined
		);
	});
});
