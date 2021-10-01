import { injectable, inject } from 'tsyringe';

import ICreateSpecializationDTO from '../dtos/ICreateSpecializationDTO';
import Specialization from '../infra/typeorm/entities/Specialization';
import ISkillRepository from '../repositories/ISkillRepository';
import ISpecializationRepository from '../repositories/ISpecializationRepository';

@injectable()
export default class CreateSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private skillRepository: ISpecializationRepository
	) {}

	public async execute(
		data: ICreateSpecializationDTO
	): Promise<Specialization> {
		const result = await this.skillRepository.create(data);

		return result;
	}
}
