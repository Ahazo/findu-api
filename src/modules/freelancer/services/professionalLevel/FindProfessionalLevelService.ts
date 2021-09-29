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

	public async executeById(id: number): Promise<ProfessionalLevel | undefined> {
		const result = await this.professionalLevelRepository.findById(id);

		return result;
	}
}
