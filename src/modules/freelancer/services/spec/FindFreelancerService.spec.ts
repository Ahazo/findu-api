import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';

let fakeFreelancerRepository: FakeFreelancerRepository;

let findFreelancer: FindFreelancerService;
let createFreelancer: CreateFreelancerService;

describe('FindBy Freelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();

		findFreelancer = new FindFreelancerService(fakeFreelancerRepository);
		createFreelancer = new CreateFreelancerService(fakeFreelancerRepository);
	});

	it('should be able to find freelancer by freelancer id', async () => {
		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		const freelancer = await createFreelancer.execute(freelancerData);
		const freelancerFound = await findFreelancer.executeById(freelancer.id);

		expect(freelancerFound).toEqual(freelancer);
	});

	it('should not be able to find freelancer by freelancer id', async () => {
		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
			level_id: 1,
		};

		const freelancer = await createFreelancer.execute(freelancerData);
		const freelancerFound = await findFreelancer.executeById(freelancer.id + 1);

		expect(freelancerFound).toEqual(undefined);
	});
});
