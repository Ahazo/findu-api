/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import { generateToken } from '../../../../../shared/utils/generateToken';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';
import FindInfluencerLevelService from '../../../services/influencerLevel/FindInfluencerLevelService';

export interface ISkillsRemodel {
	type_id: number;
	type: string;
	specializations: {
		specialization_id: number;
		skill_id: number;
		specialization_description: string;
		status: EStatus;
	}[];
}
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
				return response.status(400).json({
					message: 'User not found',
				});
			}

			const isUserFreelancerActive = userFound.freelancer.status === 'active';
			const skills: ISkillsRemodel[] = [];

			if (isUserFreelancerActive) {
				userFound.freelancer.skill?.forEach((skill) => {
					const typeIndex = skills.findIndex(
						(area) => area.type === skill.specialization.area.description
					);
					const specializationData = {
						specialization_id: skill.specialization_id,
						skill_id: skill.id,
						specialization_description: skill.specialization.description,
						status: skill.status,
					};

					if (typeIndex === -1) {
						skills.push({
							type_id: skill.specialization.area.id,
							type: skill.specialization.area.description,
							specializations: [specializationData],
						});
					} else {
						skills[typeIndex].specializations.push(specializationData);
					}
				});
			}

			return response.status(200).json({
				id: userFound.id,
				name: `${userFound.person.first_name} ${userFound.person.last_name}`,
				username: userFound.username,
				experience: userFound.experience,
				followers: userFound.follower_count,
				following: userFound.following_count,
				levelDescription: userFound.influencerLevel.description,
				levelNumber: userFound.influencerLevel.level_number,
				description: userFound.description,
				label: userFound.label,
				...(userFound.freelancer &&
					isUserFreelancerActive && {
						freelancer: {
							projects: userFound.freelancer.projects_count,
							open_to_work: userFound.freelancer.open_to_work,
							experience: userFound.freelancer.experience,
							levelNumber: userFound.freelancer.professionalLevel.level_number,
							levelDescription:
								userFound.freelancer.professionalLevel.description,
							skills,
						},
					}),
			});
		} catch (error: any) {
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
