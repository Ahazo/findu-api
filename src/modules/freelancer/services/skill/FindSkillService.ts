import { injectable, inject } from 'tsyringe';

import Skill from '../../infra/typeorm/entities/Skill';
import ISkillRepository from '../../repositories/ISkillRepository';

@injectable()
export default class FindSkillService {
	constructor(
		@inject('SkillRepository')
		private skillRepository: ISkillRepository
	) {}

	public async executeById(id: string): Promise<Skill | undefined> {
		const skill = await this.skillRepository.findById(id);

		return skill;
	}

	public async executeAll(): Promise<Skill[] | undefined> {
		const skill = await this.skillRepository.findAll();

		return skill;
	}
}
