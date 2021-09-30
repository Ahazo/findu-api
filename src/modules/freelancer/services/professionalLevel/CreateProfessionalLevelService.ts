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
		const levelData1: ICreateProfessionalLevelDTO = {
			description: 'A little far to a Professional Mighty',
			experience_needed: 7,
		};

		await this.professionalLevelRepository.create(levelData1);

		const result2 = await this.professionalLevelRepository.create(data);

		if (data.experience_needed === levelData1.experience_needed) {
			throw new Error(
				'You cannot create two levels with the same experience needed'
			);
		} else if (data.description === levelData1.description) {
			throw new Error('You cannot create two levels with the same description');
		} else {
			return result2;
		}

		/*		throw new Error('User not found');

		if (updatedUsername && updatedUsername?.id !== userId) { */
	}
}
