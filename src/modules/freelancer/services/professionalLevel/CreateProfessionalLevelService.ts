import { injectable, inject } from 'tsyringe';

import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../../infra/typeorm/entities/ProfessionalLevel';
import IProfessionalLevelRepository from '../../repositories/IProfessionalLevelRepository';

@injectable()
export default class CreateProfessionalLevelService {
	constructor(
		@inject('ProfessionalLevelRepository')
		private professionalLevelRepository: IProfessionalLevelRepository
	) {}

	public async execute(
		data: ICreateProfessionalLevelDTO
	): Promise<ProfessionalLevel> {
		const checkLevelNumberExists =
			await this.professionalLevelRepository.findByLevelNumber(
				data.level_number
			);

		if (checkLevelNumberExists) throw new Error('Level already exists');

		const checkDescriptionExists =
			await this.professionalLevelRepository.findByDescription(
				data.description
			);

		if (checkDescriptionExists) throw new Error('Description already exists');

		const checkExperienceNeededExists =
			await this.professionalLevelRepository.findByExperienceNeeded(
				data.experience_needed
			);

		if (checkExperienceNeededExists)
			throw new Error(
				'Experience needed attribute already exists with same value'
			);

		const professionalLevel = await this.professionalLevelRepository.create(
			data
		);

		return professionalLevel;
	}
}
