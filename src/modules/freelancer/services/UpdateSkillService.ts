import { injectable, inject } from 'tsyringe';

import ISkillRepository from '../repositories/ISkillRepository';

interface IRequestDTO {
	skillId: number;

	specialization_id: number;
	freelancer_id: number;
}

@injectable()
export default class UpdateSkillService {
	constructor(
		@inject('SkillRepository')
		private skillRepository: ISkillRepository
	) {}

	public async execute({
		skillId: number,
		specialization_id: number,
		freelancer_id: number,
	}: IRequestDTO): Promise<Skill> {
		const result = await this.skillRepository.findById(skillId);

		result await this.skillRepository.save(result);
	}
}
