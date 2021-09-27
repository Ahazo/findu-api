import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';
import SaveUserService from '../UpdateUserService';

describe('UpdateUser', () => {
	it('should be able to save changes in the table user', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const SaveUser = new SaveUserService(fakeUserRepository);

		const CreateUser = new CreateUserService(
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

		const userData1: ICreateUserDTO = {
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
			username: 'oscaravendo',
			password: 'AndreGostoso767!!',
			level_id: level.id,
		};

		const user = await CreateUser.execute(userData);
		const user1 = await CreateUser.execute(userData1);

		const save = await SaveUser.executeSave(user1);

		expect(user).toBe(user1);
	});
});
