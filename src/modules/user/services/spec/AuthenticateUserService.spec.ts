// import AppError from '../../../shared/errors/AppError';

import { Status } from '../../dtos/ICreateUserDTO';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import AuthenticateUserService from '../AuthenticateUserService';
import CreateUserService from '../CreateUserService';

describe('AuthenticateUser', () => {
	it('should be able to authenticate', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const AuthenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const user = await CreateUser.execute({
			username: 'julia4',
			password: 'alves',
			person: {
				cpf: '493.726.168-51',
				email: 'scarano.dev4@gmail.com',
				cellphone: '+55 11 97852-3866',
				birth_date: new Date(),
				first_name: 'Lucca',
				last_name: 'Scarano',
				userAddress: {
					postal_code: '12490-362',
					street: 'Rua Marques do Pombal',
					house_number: 100,
					state: 'RJ',
					city: 'Sao Paulo',
				},
			},
			status: Status.active,
			followers_count: 0,
			campaigns_count: 0,
			recommendations_count: 0,
			experience: 0,
		});

		const response = await AuthenticateUser.execute({
			username: 'julia4',
			password: 'alves',
		});

		expect(response).toHaveProperty('token');
		expect(response.user).toBe(user);
	});

	it('should not be able to authenticate an unexistent user', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();

		const AuthenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		await expect(
			AuthenticateUser.execute({
				username: 'julia45',
				password: '123456',
			})
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to authenticate an user with wrong password', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const AuthenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		await CreateUser.execute({
			username: 'julia4',
			password: 'alves',
			person: {
				cpf: '493.726.168-51',
				email: 'scarano.dev4@gmail.com',
				cellphone: '+55 11 97852-3866',
				birth_date: new Date(),
				first_name: 'Lucca',
				last_name: 'Scarano',
				userAddress: {
					postal_code: '12490-362',
					street: 'Rua Marques do Pombal',
					house_number: 100,
					state: 'RJ',
					city: 'Sao Paulo',
				},
			},
			status: Status.active,
			followers_count: 0,
			campaigns_count: 0,
			recommendations_count: 0,
			experience: 0,
		});

		await expect(
			AuthenticateUser.execute({
				username: 'julia4',
				password: 'wrong-password',
			})
		).rejects.toBeInstanceOf(Error);
	});
});
