import { injectable, inject } from 'tsyringe';

import Specialization from '../../infra/typeorm/entities/Specialization';
import ISpecializationRepository from '../../repositories/ISpecializationRepository';

@injectable()
export default class UpdateSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private specializationRepository: ISpecializationRepository
	) {}

	public async execute(
		specialization: Specialization
	): Promise<Specialization> {
		return this.specializationRepository.save(specialization);
	}
}
