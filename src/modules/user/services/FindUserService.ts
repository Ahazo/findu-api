import { injectable, inject } from 'tsyringe';

import IUserResponseDTO from '../dtos/IUserResponseDTO';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class FindUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository
	) {}

	public async executeById(id: string): Promise<User | undefined> {
		const user = await this.usersRepository.findById(id);
		return user;
	}

	public async executeByUsername(username: string): Promise<User | undefined> {
		const user = await this.usersRepository.findByUsername(username);
		return user;
	}
}
