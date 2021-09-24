import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUserRepository from '../../../repositories/IUserRepository';
import User from '../entities/User';

class UsersRepository implements IUserRepository {
	private userRepository: Repository<User>;

	constructor() {
		this.userRepository = getRepository(User);
	}

	public async create(userData: ICreateUserDTO): Promise<User> {
		const user = this.userRepository.create(userData);

		await this.userRepository.save(user);
		return user;
	}

	public async save(user: User): Promise<User> {
		return this.userRepository.save(user);
	}

	public async findByUsername(username: string): Promise<User | undefined> {
		const user = await this.userRepository.findOne({
			where: {
				username,
			},
		});
		return user;
	}

	public async findById(id: number): Promise<User | undefined> {
		const user = await this.userRepository.findOne(id);
		return user;
	}
}

export default UsersRepository;
