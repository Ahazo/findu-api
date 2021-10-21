import FakeUsersRepository from '../../../user/repositories/fakes/FakeUsersRepository';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeUserRepository: FakeUsersRepository;

let findFreelancer: FindFreelancerService;

describe('FindBy Freelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeUserRepository = new FakeUsersRepository();
		findFreelancer = new FindFreelancerService(fakeFreelancerRepository);
	});

	it('should be able to find freelancer by freelancer id', async () => {
		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);
		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);
		const freelancerFound = await findFreelancer.executeById(freelancer.id);

		expect(freelancerFound).toEqual(freelancer);
	});

	it('should not be able to find freelancer by freelancer id', async () => {
		const findFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const createFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		const freelancer = await createFreelancer.execute(freelancerData);

		const result = await findFreelancer.executeById(freelancer.id + 1);

		expect(result).toEqual(undefined);
	});
});
