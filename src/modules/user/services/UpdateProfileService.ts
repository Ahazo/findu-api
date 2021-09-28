import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

interface IRequestDTO {
	userId: number;
	username?: string;

	oldPassword?: string;
	password?: string;
}

@injectable()
export default class SaveUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository,

		@inject('HashProvider')
		private hashProvider: IHashProvider
	) {}

	public async execute({
		userId,
		username,
		password,
		oldPassword,
	}: IRequestDTO): Promise<User> {
		const user = await this.usersRepository.findById(userId);

		if (!user) {
			throw new Error('User not found');
		}

		if (username) {
			const updatedUsername = await this.usersRepository.findByUsername(
				username
			);

			if (updatedUsername && updatedUsername?.id !== userId) {
				throw new Error('Username already exists');
			}

			user.username = username;
		}

		if (password && !oldPassword) {
			throw new Error(
				'You need to infor the old password to set a new password'
			);
		}

		if (password && oldPassword) {
			const checkOldPassword = await this.hashProvider.compareHash(
				oldPassword,
				user.password
			);

			if (!checkOldPassword) {
				throw new Error('Passwords does not match');
			}
		}

		if (password) {
			user.password = await this.hashProvider.generateHash(password);
		}

		return this.usersRepository.save(user);
	}
}
