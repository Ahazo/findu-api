import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { generateToken } from '../../../../../shared/utils/generateToken';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';

export default class UsersController {
	async createUser(request: Request, response: Response) {
		const userData = request.body;
		const createUser = container.resolve(CreateUserService);
		const user = await createUser.execute(userData);

		const token = generateToken(user.id);

		return response.status(200).json({
			user,
			token,
		});
	}

	async findUserById(request: Request, response: Response) {
		const findUSer = container.resolve(FindUserService);
		const user = await findUSer.executeById(request.userId);

		if (!user) {
			response.status(400).json({
				message: 'User id not found',
			});
		}

		return response.status(200).json(user);
	}
}
