import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default class SessionController {
	public async create(request: Request, response: Response): Promise<Response> {
		try {
			const { username, password } = request.body;

			const authenticateUser = container.resolve(AuthenticateUserService);

			const { user, token } = await authenticateUser.execute({
				username,
				password,
			});

			return response.json({ user, token });
		} catch (error) {
			return response.status(400).json({ message: error.message });
		}
	}
}
