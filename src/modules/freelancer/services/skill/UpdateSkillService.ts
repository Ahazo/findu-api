import { injectable, inject } from 'tsyringe';

import Skill from '../../infra/typeorm/entities/Skill';
import ISkillRepository from '../../repositories/ISkillRepository';

@injectable()
export default class UpdateSkillService {
	constructor(
		@inject('SkillRepository')
		private skillRepository: ISkillRepository
	) {}

	public async execute(skill: Skill): Promise<Skill> {
		const skillFound = await this.skillRepository.findById(skill.id);

		if (!skillFound) throw new Error('Skill not found');

		const isIncomingChangeProhibited =
			skillFound.specialization_id !== skill.specialization_id ||
			skillFound.freelancer_id !== skill.freelancer_id;

		if (isIncomingChangeProhibited)
			throw new Error('Change unauthorized - field cannot be changed');

		return this.skillRepository.save(skill);
	}
}
