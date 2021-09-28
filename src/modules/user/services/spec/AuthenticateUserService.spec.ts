// import AppError from '../../../shared/errors/AppError';

import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import AuthenticateUserService from '../AuthenticateUserService';
import CreateUserService from '../CreateUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';

describe('AuthenticateUser', () => {
	it('should be able to authenticate', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const AuthenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateInfluencerLevel.execute(levelData);

		const user = await CreateUser.execute({
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
		});

		const response = await AuthenticateUser.execute({
			username: 'scaralu',
			password: 'AndreGostoso767!!',
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
				username: 'scaraluUsuarioNaoExistente',
				password: 'AndreGostoso767!!',
			})
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to authenticate an user with wrong password', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const AuthenticateUser = new AuthenticateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateInfluencerLevel.execute(levelData);

		await CreateUser.execute({
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
		});

		await expect(
			AuthenticateUser.execute({
				username: 'scaralu',
				password: 'wrong-password',
			})
		).rejects.toBeInstanceOf(Error);
	});
});
