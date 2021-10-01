import { injectable, inject } from 'tsyringe';

import Skill from '../infra/typeorm/entities/Skill';
import ISkillRepository from '../repositories/ISkillRepository';

@injectable()
export default class FindSkillService {
	constructor(
		@inject('SkillRepository')
		private skillRepository: ISkillRepository
	) {}

	public async executeById(id: number): Promise<Skill | undefined> {
		const result = await this.skillRepository.findById(id);

		return result;
	}
}
