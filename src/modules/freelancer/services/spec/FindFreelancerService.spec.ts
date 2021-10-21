import ICreateInfluencerLevelDTO from '../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../../user/providers/fakes/FakeHashProvider';
import CreateUserService from '../../../user/services/CreateUserService';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;
let fakeHashProvider: FakeHashProvider;
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
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const userData: ICreateUserDTO = {
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					house_number: 4,
					complement: 'na frente do poster de um cara gostoso',
					city: 'Sao Paulo',
					state: 'SP',
				},
				cpf: '493.726.168-18',
				email: 'scarano.dev@gmail.com',
				cellphone_number: '(11) 97801-3866',
				first_name: 'Lucca',
				last_name: 'Scarano',
				birth_date: new Date(),
			},
			username: 'scaralu',
			password: 'AndreGostoso767!!',
			level_id: level.id,
		};

		const user = await CreateUser.execute(userData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: user.id,
			level_id: level.id,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const result = await FindFreelancer.executeById(freelancer.id + 1);

		expect(result).toEqual(undefined);
	});
});
