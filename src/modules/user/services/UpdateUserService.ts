import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class SaveUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository
	) {}

	public async executeSave(user: User): Promise<User | undefined> {}
}
