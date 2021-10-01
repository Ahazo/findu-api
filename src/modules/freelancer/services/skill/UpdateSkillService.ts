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
		return this.skillRepository.save(skill);
	}
}
