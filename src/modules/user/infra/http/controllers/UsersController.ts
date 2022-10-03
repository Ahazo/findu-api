/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { generateToken } from '../../../../../shared/utils/generateToken';
import { userToResponse } from '../../../../../shared/utils/userToResponse';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';
import UpdateProfileService from '../../../services/UpdateProfileService';

export default class UsersController {
	async createUser(request: Request, response: Response): Promise<Response> {
		const userData = request.body;

		if (!userData) {
			return response.status(400).json({
				error: 'Unable to read user data',
			});
		}

		try {
			const createUser = container.resolve(CreateUserService);
			const user = await createUser.execute(userData);
			const token = generateToken(user.id);

			return response.status(200).json({
				user,
				token,
			});
		} catch (err: any) {
			console.error('Error on signUpController --- ', err.message);
			return response.status(500).json({
				message: err.message,
			});
		}
	}

	async findUserById(request: Request, response: Response): Promise<Response> {
		try {
			const findUser = container.resolve(FindUserService);
			const userFound = await findUser.executeById(request.userId);
			if (!userFound) {
				return response.status(400).json({
					message: 'User not found',
				});
			}
			return response.status(200).json(userToResponse(userFound));
		} catch (error: any) {
			console.error('Error on findUserByID --- ', error.message);
			return response.status(500).json({ message: error.message });
		}
	}

	async findUserByUsername(
		request: Request,
		response: Response
	): Promise<Response> {
		try {
			const findUser = container.resolve(FindUserService);
			const { username } = request.params;
			const userFound = await findUser.executeByUsername(username);
			if (!userFound) {
				return response.status(400).json({
					message: 'User not found',
				});
			}
			return response.status(200).json(userToResponse(userFound));
		} catch (error: any) {
			console.error('Error on findUserByUsername --- ', error.message);
			return response.status(500).json({ message: error.message });
		}
	}

	// TODO: Check values to be updated
	async updateUser(request: Request, response: Response): Promise<Response> {
		const updateUser = container.resolve(UpdateProfileService);

		const user = updateUser.execute({
			userId: request.userId,
			userData: request.body,
		});

		return response.json(user);
	}
}
