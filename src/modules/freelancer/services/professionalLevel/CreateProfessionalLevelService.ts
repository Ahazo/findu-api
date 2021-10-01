import { injectable, inject } from 'tsyringe';

import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../../infra/typeorm/entities/ProfessionalLevel';
import IProfessionalLevelRepository from '../../repositories/IProfessionalLevelRepository';

@injectable()
export default class CreateInfluencerLevelService {
	constructor(
		@inject('ProfessionaLevelRepository')
		private professionalLevelRepository: IProfessionalLevelRepository
	) {}

	public async execute(
		data: ICreateProfessionalLevelDTO
	): Promise<ProfessionalLevel> {
		const checkDescriptionProfessionalLevelExists =
			await this.professionalLevelRepository.findByDescription(
				data.description
			);

		if (checkDescriptionProfessionalLevelExists)
			throw new Error('Description already exists');

		const checkExperienceNeededProfessionalLevelExists =
			await this.professionalLevelRepository.findByExperienceNeeded(
				data.experience_needed
			);

		if (checkExperienceNeededProfessionalLevelExists)
			throw new Error('Experience needed already exists');

		const professionalLevel = this.professionalLevelRepository.create(data);

		return professionalLevel;
	}
}
