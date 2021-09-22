import { injectable, inject } from 'tsyringe';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class CreateUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository,

		@inject('HashProvider')
		private hashProvider: IHashProvider
	) {}

	public async execute(userData: ICreateUserDTO): Promise<User> {
		const hashedPassword = await this.hashProvider.generateHash(
			userData.password
		);
		const user = await this.usersRepository.create({
			...userData,
			password: hashedPassword,
		});

		console.log(user);

		return user;
	}
}
