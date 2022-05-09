/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { generateToken } from '../../../../../shared/utils/generateToken';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';
import FindInfluencerLevelService from '../../../services/influencerLevel/FindInfluencerLevelService';

export default class UsersController {
	async createUser(request: Request, response: Response): Promise<Response> {
		const userData = request.body;

		if (!userData) {
			console.log('Request without data');
			return response.status(400).json({
				error: 'Unable to read user data',
			});
		}
		try {
			const findInfluencerLevel = container.resolve(FindInfluencerLevelService);
			const influencerLevel = await findInfluencerLevel.executeByLevelNumber(1);

			if (!influencerLevel) {
				return response.status(500).json({
					error: 'Unable to retrive inital level data.',
				});
			}

			const createUser = container.resolve(CreateUserService);
			const user = await createUser.execute({
				...userData,
				level_id: influencerLevel?.id,
			});

			const token = generateToken(user.id);

			return response.status(200).json({
				user,
				token,
			});
		} catch (err: any) {
			console.log('Error on signUpController --- ', err.message);
			console.log(err);
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
			return response.status(200).json(userFound);
		} catch (error: any) {
			console.log('Error in findUserByID: ', error.message);
			return response.status(500).json({ message: error.message });
		}
	}

	async findUserByUsername(
		request: Request,
		response: Response
	): Promise<Response> {
		const findUser = container.resolve(FindUserService);
		const { username } = request.params;
		const user = await findUser.executeByUsername(username);

		if (!user) {
			response.status(400).json({
				message: 'User id not found',
			});
		}

		return response.status(200).json(user);
	}
}
