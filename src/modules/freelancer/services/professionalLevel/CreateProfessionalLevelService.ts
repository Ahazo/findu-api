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
		const result = await this.professionalLevelRepository.create(data);

		return result;
	}
}
