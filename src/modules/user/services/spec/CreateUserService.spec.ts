// import AppError from '../../../shared/errors/AppError';

import { EStatus } from '../../../../shared/utils/dtos/EStatus';
import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';

describe('CreateUser', () => {
	it('should be able to create user', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();

		const CreateUser = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		const level: ICreateInfluencerLevelDTO = {
			description: 'Mestre dos magos',
			experience_needed: 0,
			status: EStatus.active,
		};

		const userData: ICreateUserDTO = {
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					house_number: 4,
					complement: 'na frente do poster de um cara gostoso',
					city: 'Sao Paulo',
					state: 'SP',
					status: EStatus.active,
				},
				cpf: '493.726.168-18',
				email: 'scarano.dev@gmail.com',
				cellphone_number: '(11) 97801-3866',
				first_name: 'Lucca',
				last_name: 'Scarano',
				birth_date: new Date(),
				status: EStatus.active,
			},
			username: 'scaralu',
			password: 'AndreGostoso767!!',
			level: 1,
			experience: 0,
			followers_count: 0,
			following_count: 0,
			status: EStatus.active,
		};

		const user = await CreateUser.execute();

		expect(user).toBeInstanceOf(User);
	});
});
