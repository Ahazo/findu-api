import { injectable, inject } from 'tsyringe';

import ICreateSpecializationDTO from '../../dtos/ICreateSpecializationDTO';
import Specialization from '../../infra/typeorm/entities/Specialization';
import ISpecializationRepository from '../../repositories/ISpecializationRepository';

@injectable()
export default class CreateSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private specializationRepository: ISpecializationRepository
	) {}

	public async execute(
		data: ICreateSpecializationDTO
	): Promise<Specialization> {
		const result = await this.specializationRepository.create(data);

		return result;
	}
}
