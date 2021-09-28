import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';
import UpdateProfileService from '../UpdateProfileService';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let fakeInfluencerLevelRepository: FakeInfluencerLevelRepository;

describe('UpdateUser', () => {
	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();
		fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();
	});

	it('should be able to update profile username', async () => {
		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		const UpdateProfile = new UpdateProfileService(
			fakeUserRepository,
			fakeHashProvider
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateInfluencerLevel.execute(levelData);

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

		const updatedUser = await UpdateProfile.execute({
			userId: user.id,
			username: 'escaravelho',
		});

		expect(updatedUser).toBeInstanceOf(User);
		expect(updatedUser.username).toBe('escaravelho');
	});

	it('should be able to update profile password', async () => {
		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		const UpdateProfile = new UpdateProfileService(
			fakeUserRepository,
			fakeHashProvider
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateInfluencerLevel.execute(levelData);

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

		const updatedUser = await UpdateProfile.execute({
			userId: user.id,
			oldPassword: user.password,
			password: 'AndreGostoso676??',
		});

		expect(updatedUser).toBeInstanceOf(User);
		expect(updatedUser.password).toBe('AndreGostoso676??');
	});
});
