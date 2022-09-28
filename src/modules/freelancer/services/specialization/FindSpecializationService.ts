import { injectable, inject } from 'tsyringe';

import Specialization from '../../infra/typeorm/entities/Specialization';
import ISpecializationRepository from '../../repositories/ISpecializationRepository';

@injectable()
export default class FindSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private specializationRepository: ISpecializationRepository
	) {}

	public async execute(): Promise<Specialization[] | undefined> {
		const specializations = await this.specializationRepository.findAll();
		return specializations;
	}

	public async executeById(id: string): Promise<Specialization | undefined> {
		const specialization = await this.specializationRepository.findById(id);

		return specialization;
	}

	public async executeByName(
		name: string
	): Promise<Specialization | undefined> {
		const specialization = await this.specializationRepository.findByName(name);

		return specialization;
	}
}
