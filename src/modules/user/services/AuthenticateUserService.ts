import { inject, injectable } from 'tsyringe';

import { generateToken } from '../../../shared/utils/generateToken';
import IHashProvider from '../providers/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';

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

	public async execute({ username, password }: IRequestBody): Promise<string> {
		const user = await this.usersRepository.findByUsername(username);
		if (!user) {
			throw new Error('Usuário ou senha incorretos');
		}
		const passwordMatched = await this.hashProvider.compareHash(
			password,
			user.password
		);
		if (!passwordMatched) {
			throw new Error('Usuário ou senha incorretos');
		}

		const token = generateToken(user.id);
		return token;
	}
}

export default AuthenticatUserService;
