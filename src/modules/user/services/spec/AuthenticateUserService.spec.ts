// import AppError from '../../../shared/errors/AppError';

import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import FakeUserRepository from '../../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from '../AuthenticateUserService';
import CreateUserService from '../CreateUserService';

describe('AuthenticateUser', () => {
	let fakeUserRepository: FakeUserRepository;
	let fakeHashProvider: FakeHashProvider;

	let createUser: CreateUserService;
	let authenticateUser: AuthenticateUserService;

	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();

		createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
		authenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);
	});

	it('should be able to authenticate', async () => {
		await createUser.execute({
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					neighborhood: 'Jardim Londrina',
					number: 4,
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
			username: 'user',
			password: 'password',
		});

		const token = await authenticateUser.execute({
			username: 'user',
			password: 'password',
		});

		expect(token).toBeDefined();
	});

	it('should not be able to authenticate an unexistent user', async () => {
		await expect(
			authenticateUser.execute({
				username: 'unexistentUser',
				password: 'unexistentPassword',
			})
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to authenticate an user with wrong password', async () => {
		await createUser.execute({
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					neighborhood: 'Jardim Londrina',
					number: 4,
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
			username: 'user',
			password: 'password',
		});

		await expect(
			authenticateUser.execute({
				username: 'scaralu',
				password: 'wrong-password',
			})
		).rejects.toBeInstanceOf(Error);
	});
});
