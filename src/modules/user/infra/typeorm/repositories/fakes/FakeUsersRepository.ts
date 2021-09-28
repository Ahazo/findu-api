import ICreateUserDTO from '../../../../dtos/ICreateUserDTO';
import IUserRepository from '../../../../repositories/IUserRepository';
import User from '../../entities/User';

class FakeUsersRepository implements IUserRepository {
	private users: User[] = [];

	public async findById(id: number): Promise<User | undefined> {
		const userFound = this.users.find((user) => user.id === id);
		return userFound;
	}

	public async findByUsername(username: string): Promise<User | undefined> {
		const userFound = this.users.find((user) => user.username === username);
		return userFound;
	}

	public async create(userData: ICreateUserDTO): Promise<User> {
		const user = new User();

		Object.assign(
			user,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			userData
		);

		this.users.push(user);
		return user;
	}

	public async save(user: User): Promise<User> {
		const findIndex = this.users.findIndex(
			(findUser) => findUser.id === user.id
		);

		this.users[findIndex] = user;

		return user;
	}
}

export default FakeUsersRepository;
