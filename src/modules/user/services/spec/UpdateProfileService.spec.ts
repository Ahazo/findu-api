import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import FakeUserRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';
import UpdateProfileService from '../UpdateProfileService';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();

		createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
		updateProfile = new UpdateProfileService(
			fakeUserRepository,
			fakeHashProvider
		);
	});

	it('should be able to update profile username', async () => {
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
			password: 'password',
			level_id: 1,
		};

		const user = await createUser.execute(userData);
		const updatedUser = await updateProfile.execute({
			userId: user.id,
			username: 'escaravelho',
		});

		expect(updatedUser).toBeInstanceOf(User);
		expect(updatedUser.username).toBe('escaravelho');
	});

	it('should be able to update profile password', async () => {
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
			password: 'password',
			level_id: 1,
		};

		const user = await createUser.execute(userData);

		const updatedUser = await updateProfile.execute({
			userId: user.id,
			oldPassword: user.password,
			password: 'password',
		});

		expect(updatedUser).toBeInstanceOf(User);
		expect(updatedUser.password).toBe('password');
	});
});
