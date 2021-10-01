import { injectable, inject } from 'tsyringe';

import ISpecializationRepository from '../repositories/ISpecializationRepository';

interface IRequestDTO {
	specializationId: number;

	areaId: number;
	description: string;
}

@injectable()
export default class UpdateSpecializationService {
	constructor(
		@inject('SpecializationRepository')
		private specializationRepository: ISpecializationRepository
	) {}

	public async execute({
		specializationId: number,
		areaId: number,
		description: string,
	}: IRequestDTO): Promise<Specialization> {
		const result = await this.specializationRepository.findById(
			specializationId
		);

		return await this.specializationRepository.save(result);
	}
}
