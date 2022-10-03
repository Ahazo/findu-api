import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

interface IRequestDTO {
	userId: string;
	userData: IUserUpdate;
}

@injectable()
export default class UpdateProfileService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository,

		@inject('HashProvider')
		private hashProvider: IHashProvider
	) {}

	public async execute({ userId, userData }: IRequestDTO): Promise<User> {
		const user = await this.usersRepository.findById(userId);

		if (!user) {
			throw new Error('User not found');
		}

		if (userData.username) {
			const updatedUsername = await this.usersRepository.findByUsername(
				userData.username
			);

			if (updatedUsername && updatedUsername?.id !== userId) {
				throw new Error('Username already exists');
			}

			user.username = userData.username;
		}

		if (userData.first_name) {
			user.person.first_name = userData.first_name;
		}

		if (userData.last_name) {
			user.person.last_name = userData.last_name;
		}

		if (userData.description) {
			user.description = userData.description;
		}

		if (userData.email) {
			const updatedUsername = await this.usersRepository.findByEmail(
				userData.email
			);

			if (updatedUsername && updatedUsername?.id !== userId) {
				throw new Error('Username already exists');
			}

			user.person.email = userData.email;
		}

		return this.usersRepository.save(user);
	}
}
