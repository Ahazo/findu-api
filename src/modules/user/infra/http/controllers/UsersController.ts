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
			return response.status(400).json({
				error: 'Unable to read user data',
			});
		}

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
	}

	async findUserById(request: Request, response: Response): Promise<Response> {
		try {
			const findUser = container.resolve(FindUserService);

			const userFound = await findUser.executeById(request.userId);
			if (!userFound) {
				response.status(400).json({
					message: 'User not found',
				});
			}

			return response.status(200).json({
				name: `${userFound?.person.first_name} ${userFound?.person.last_name}`,
				username: userFound?.username,
				experience: userFound?.experience,
				followers: userFound?.follower_count,
				following: userFound?.following_count,
				levelDescription: userFound?.influencerLevel.description,
				levelNumber: userFound?.influencerLevel.level_number,
				...(userFound?.freelancer && {
					freelancer: {
						projects: userFound?.freelancer.projects_count,
						open_to_work: userFound?.freelancer.open_to_work,
						experience: userFound?.freelancer.experience,
						levelNumber: userFound?.freelancer.professionalLevel.level_number,
						levelDescription:
							userFound?.freelancer.professionalLevel.description,
					},
				}),
			});
		} catch (error) {
			return response.status(400).json({ message: error });
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
