// import AppError from '../../../shared/errors/AppError';
import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../infra/typeorm/entities/User';
import FakeInfluencerLevelRepository from '../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import FakeUserRepository from '../../infra/typeorm/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import CreateUserService from '../CreateUserService';
import CreateInfluencerLevelService from '../influencerLevel/CreateInfluencerLevelService';

let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let fakeInfluencerLevelRepository: FakeInfluencerLevelRepository;

describe('CreateUser', () => {
	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();
		fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();
	});

	it('should be able to create user', async () => {
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

		expect(user).toBeInstanceOf(User);
		expect(user.level_id).toEqual(level.id);
	});
});
