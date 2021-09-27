import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class FindUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository
	) {}

	public async executeById(id: number): Promise<User | undefined> {
		const user = await this.usersRepository.findById(id);
		return user;
	}
}
