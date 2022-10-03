import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import FakeHashProvider from '../../providers/fakes/FakeHashProvider';
import FakeUserRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';
import FindUserService from '../FindUserService';

describe('FindUser', () => {
	let fakeUserRepository: FakeUserRepository;
	let fakeHashProvider: FakeHashProvider;

	let createUser: CreateUserService;
	let findUser: FindUserService;

	beforeEach(() => {
		fakeUserRepository = new FakeUserRepository();
		fakeHashProvider = new FakeHashProvider();

		findUser = new FindUserService(fakeUserRepository);
		createUser = new CreateUserService(fakeUserRepository, fakeHashProvider);
	});

	it('should be able to find users by id', async () => {
		const userData: ICreateUserDTO = {
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
		};

		const user = await createUser.execute(userData);
		const userFound = await findUser.executeById(user.id);

		expect(userFound).toEqual(user);
	});

	it('should be able to find user by username', async () => {
		const userData: ICreateUserDTO = {
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
		};

		const user = await createUser.execute(userData);
		const userFound = await findUser.executeByUsername(user.username);

		expect(userFound).toBe(user);
	});

	it('should not be able to find user by unexistent id', async () => {
		const userData: ICreateUserDTO = {
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
		};

		const user = await createUser.execute(userData);
		const userNotFound = await findUser.executeById(user.id + 1);

		expect(userNotFound).toBeUndefined();
	});

	it('should not be able to find unexistent username', async () => {
		const userData: ICreateUserDTO = {
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
		};

		await createUser.execute(userData);

		const find = await findUser.executeByUsername('unexistent username');

		expect(find).toBeUndefined();
	});
});
