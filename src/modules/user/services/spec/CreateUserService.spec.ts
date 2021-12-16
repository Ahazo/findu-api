import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import FakeUserRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';

describe('CreateUser', () => {
	let fakeUserRepository: FakeUserRepository;
	let fakeHashProvider: FakeHashProvider;

	let createUserService: CreateUserService;

	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();

		createUserService = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);
	});

	it('should be able to create user', async () => {
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
			level_id: 1,
		};

		const user = await createUserService.execute(userData);

		expect(user).toBeInstanceOf(User);
	});

	it('should not be able to create user with the same username', async () => {
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
			level_id: 1,
		};

		await createUserService.execute(userData);

		await expect(createUserService.execute(userData)).rejects.toBeInstanceOf(
			Error
		);
	});
});
