import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';
import FindUserService from '../FindUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';

describe('FindBy', () => {
	// FIND WITH ID

	it('should be able to find users by id', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const FindUser = new FindUserService(fakeUserRepository);

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

		const user = await CreateUser.execute(userData);

		const result = await FindUser.executeById(user.id);

		expect(result).toEqual(user);
	});

	// FIND WITH USERNAME

	it('should be able to find user by username', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const FindUser = new FindUserService(fakeUserRepository);

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
			username: 'oscaravelho',
			password: 'AndreGostoso767!!',
			level_id: level.id,
		};

		const user = await CreateUser.execute(userData);

		const find = await FindUser.executeByUsername(user.username);

		expect(find).toBe(user);
	});

	// FIND WITHOUT ID

	it('should not be able to find user by unexistent id', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const FindUser = new FindUserService(fakeUserRepository);

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

		const user = await CreateUser.execute(userData);

		const result = await FindUser.executeById(user.id + 1);

		expect(result).toEqual(undefined);
	});

	// FIND WITHOUT USERNAME

	it('should not be able to find unexistent username', async () => {
		const fakeUserRepository = new FakeUserRepository();
		const fakeHashProvider = new FakeHashProvider();
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const FindUser = new FindUserService(fakeUserRepository);

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
			username: 'oscaravelho',
			password: 'AndreGostoso767!!',
			level_id: level.id,
		};

		const find = await FindUser.executeByUsername('ronaldo');

		expect(find).toBe(undefined);
	});
});
