import { inject, injectable } from 'tsyringe';

import { generateToken } from '../../../shared/utils/generateToken';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

interface IResponse {
	user: User;
	token: string;
}

interface IRequestBody {
	username: string;
	password: string;
}

@injectable()
class AuthenticatUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository,

		@inject('HashProvider')
		private hashProvider: IHashProvider
	) {}

	public async execute({
		username,
		password,
	}: IRequestBody): Promise<IResponse> {
		const user = await this.usersRepository.findByUsername(username);

		if (!user) {
			throw new Error('Inconrrect email/password combination');
		}

		const passwordMatched = await this.hashProvider.compareHash(
			password,
			user.password
		);

		if (!passwordMatched) {
			throw new Error('Inconrrect email/password combination');
		}

		const token = generateToken(user.id);

		return {
			user,
			token,
		};
	}
}

export default AuthenticatUserService;
