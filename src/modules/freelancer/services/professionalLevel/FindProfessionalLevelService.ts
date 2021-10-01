import { injectable, inject } from 'tsyringe';

import ProfessionalLevel from '../../infra/typeorm/entities/ProfessionalLevel';
import IProfessionalLevelRepository from '../../repositories/IProfessionalLevelRepository';

@injectable()
export default class FindProfessionalLevelService {
	constructor(
		@inject('ProfessionaLevelRepository')
		private professionalLevelRepository: IProfessionalLevelRepository
	) {}

	public async executeById(id: number): Promise<ProfessionalLevel | undefined> {
		const result = await this.professionalLevelRepository.findById(id);

		return result;
	}
}
