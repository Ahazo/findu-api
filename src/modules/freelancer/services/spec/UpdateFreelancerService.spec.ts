import ICreateInfluencerLevelDTO from '../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../../user/providers/fakes/FakeHashProvider';
import CreateUserService from '../../../user/services/CreateUserService';
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
let fakeHashProvider: FakeHashProvider;
let fakeUserRepository: FakeUsersRepository;

// Dar uma olhada nesse e resolver os testes
// importante que esteja implementado

describe('UpdateFreelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
		fakeHashProvider = new FakeHashProvider();
		fakeUserRepository = new FakeUsersRepository();
	});
});

it('should be able to update', async () => {
	const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);
	const CreateFreelancer = new CreateFreelancerService(
		fakeFreelancerRepository,
		fakeUserRepository
	);
	const CreateProfessionalLevel = new CreateProfessionalLevelService(
		fakeProfessionalLevelRepository
	);

	const UpdateFreelancer = new UpdateFreelancerService(
		fakeFreelancerRepository
	);

	const CreateUser = new CreateUserService(
		fakeUserRepository,
		fakeHashProvider
	);

	const levelData: ICreateProfessionalLevelDTO = {
		description: 'Almost Professional Mighty',
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

	const freelancerData1: ICreateFreelancerDTO = {
		user_id: user.id,
		level_id: level.id + 1,
	};

	const freelancer = await CreateFreelancer.execute(freelancerData);

	const updatedFreelancer = await UpdateFreelancer.execute(freelancer);

	expect(updatedFreelancer).toBeInstanceOf(Freelancer);
});
