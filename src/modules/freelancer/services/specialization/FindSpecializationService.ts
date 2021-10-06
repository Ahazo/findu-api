import { injectable, inject } from 'tsyringe';

import Specialization from '../../infra/typeorm/entities/Specialization';
import ISpecializationRepository from '../../repositories/ISpecializationRepository';

@injectable()
export default class FindSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private specializationRepository: ISpecializationRepository
	) {}

	public async executeById(id: number): Promise<Specialization | undefined> {
		const result = await this.specializationRepository.findById(id);

		return result;
	}

	public async executeByName(
		name: string
	): Promise<Specialization | undefined> {
		const result = await this.specializationRepository.findByName(name);

		return result;
	}

	public async executeAll(): Promise<Specialization[] | undefined> {
		const result = await this.specializationRepository.findAll();

		return result;
	}
}
