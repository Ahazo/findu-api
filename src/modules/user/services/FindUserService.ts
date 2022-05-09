import { injectable, inject } from 'tsyringe';

import { EStatus } from '../../../shared/utils/dtos/EStatus';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface ISkillsRemodel {
	type_id: number;
	type: string;
	specializations: {
		specialization_id: number;
		skill_id: number;
		specialization_description: string;
		status: EStatus;
	}[];
}

@injectable()
export default class FindUserService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUserRepository
	) {}

	public async executeById(id: number): Promise<any | undefined> {
		const user = await this.usersRepository.findById(id);

		if (!user) {
			return user;
		}

		const isUserFreelancerActive = user.freelancer?.status === 'active';
		const skills: ISkillsRemodel[] = [];

		if (isUserFreelancerActive) {
			user.freelancer.skill?.forEach((skill) => {
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

		const userData = {
			id: user.id,
			name: `${user.person.first_name} ${user.person.last_name}`,
			username: user.username,
			experience: user.experience,
			followers: user.follower_count,
			following: user.following_count,
			levelDescription: user.influencerLevel.description,
			levelNumber: user.influencerLevel.level_number,
			description: user.description,
			label: user.label,
			...(user.freelancer &&
				isUserFreelancerActive && {
					freelancer: {
						id: user.freelancer.id,
						projects: user.freelancer.projects_count,
						open_to_work: user.freelancer.open_to_work,
						experience: user.freelancer.experience,
						levelNumber: user.freelancer.professionalLevel.level_number,
						levelDescription: user.freelancer.professionalLevel.description,
						skills,
					},
				}),
		};

		return userData;
	}

	public async executeByUsername(username: string): Promise<User | undefined> {
		const user = await this.usersRepository.findByUsername(username);
		return user;
	}
}
