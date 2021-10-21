// import AppError from '../../../shared/errors/AppError';
import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';

describe('CreateUser', () => {
	let fakeUserRepository: FakeUserRepository;
	let fakeHashProvider: FakeHashProvider;
	let fakeInfluencerLevelRepository: FakeInfluencerLevelRepository;

	let createUserService: CreateUserService;
	let createInfluencerLevel: CreateInfluencerLevelService;

	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();
		fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		createUserService = new CreateUserService(
			fakeUserRepository,
			fakeHashProvider
		);

		createInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);
	});

	it('should be able to create user', async () => {
		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await createInfluencerLevel.execute(levelData);

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

		const user = await createUserService.execute(userData);

		expect(user).toBeInstanceOf(User);
		expect(user.level_id).toEqual(level.id);
	});

	it('should not be able to create user with the same username', async () => {
		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await createInfluencerLevel.execute(levelData);

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

		await createUserService.execute(userData);

		const userWithTheSameName: ICreateUserDTO = {
			...userData,
			username: 'scaralu',
		};

		await expect(
			createUserService.execute(userWithTheSameName)
		).rejects.toBeInstanceOf(Error);
	});
});
