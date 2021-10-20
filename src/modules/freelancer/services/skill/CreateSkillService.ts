import { injectable, inject } from 'tsyringe';

import ICreateSkillDTO from '../../dtos/ICreateSkillDTO';
import Skill from '../../infra/typeorm/entities/Skill';
import ISkillRepository from '../../repositories/ISkillRepository';

@injectable()
export default class CreateSkillService {
	constructor(
		@inject('SkillRepository')
		private skillRepository: ISkillRepository
	) {}

	public async execute(data: ICreateSkillDTO): Promise<Skill> {
		const result = await this.skillRepository.create(data);

		return result;
	}
}
