import ICreateUserDTO from '../../../user/dtos/ICreateUserDTO';
import FakeInfluencerLevelRepository from '../../../user/infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUsersRepository from '../../../user/infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../../user/providers/fakes/FakeHashProvider';
import IHashProvider from '../../../user/providers/models/IHashProvider';
import IInfluencerLevelRepository from '../../../user/repositories/IInfluencerLevelRepository';
import IUserRepository from '../../../user/repositories/IUserRepository';
import CreateUserService from '../../../user/services/CreateUserService';
import CreateInfluencerLevelService from '../../../user/services/influencerLevel/CreateInfluencerLevelService';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import FakeFreelancerRepository from '../../repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../repositories/fakes/FakeProfessionalLevelRepository';
import IFreelancerRepository from '../../repositories/IFreelancerRepository';
import IProfessionalLevelRepository from '../../repositories/IProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';
import UpdateFreelancerService from '../UpdateFreelancerService';

describe('UpdateFreelancer', () => {
	let fakeFreelancerRepository: IFreelancerRepository;
	let fakeProfessionalLevelRepository: IProfessionalLevelRepository;
	let fakeUserRepository: IUserRepository;
	let fakeHashProvider: IHashProvider;
	let fakeInfluencerLevelRepository: IInfluencerLevelRepository;

	let createFreelancer: CreateFreelancerService;
	let createProfessionalLevel: CreateProfessionalLevelService;
	let createUser: CreateUserService;
	let createInfluencerLevel: CreateInfluencerLevelService;
	let updateFreelancer: UpdateFreelancerService;

	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
		fakeUserRepository = new FakeUsersRepository();
		fakeHashProvider = new FakeHashProvider();
		fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
		createInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		createFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository,
			fakeUserRepository
		);
		createProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		updateFreelancer = new UpdateFreelancerService(fakeFreelancerRepository);
	});

	it('should be able to update', async () => {
		const influencerLevelData = {
			description: 'Influencer Mighty',
			experience_needed: 1,
		};

		const influencerLevel = await createInfluencerLevel.execute(
			influencerLevelData
		);

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
			level_id: influencerLevel.id,
		};

		const user = await createUser.execute(userData);

		const professionalLevelData: ICreateProfessionalLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await createProfessionalLevel.execute(professionalLevelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: user.id,
			level_id: level.id,
		};

		const freelancer = await createFreelancer.execute(freelancerData);

		const updatedFreelancer = await updateFreelancer.execute({
			...freelancer,
			projects_count: 1,
		});

		expect(updatedFreelancer).toHaveProperty('projects_count', 1);
	});
});
