import { getRepository, Repository } from 'typeorm';

import ICreateSpecializationDTO from '../../../dtos/ICreateSpecializationDTO';
import ISpecializationRepository from '../../../repositories/ISpecializationRepository';
import Specialization from '../entities/Specialization';

export default class SpecializationRepository
	implements ISpecializationRepository
{
	private specializationRepository: Repository<Specialization>;

	constructor() {
		this.specializationRepository = getRepository(Specialization);
	}

	async create(data: ICreateSpecializationDTO): Promise<Specialization> {
		const specialization = this.specializationRepository.create(data);
		this.specializationRepository.save(specialization);

		return specialization;
	}

	async save(specialization: Specialization): Promise<Specialization> {
		return this.specializationRepository.save(specialization);
	}

	async findById(id: number): Promise<Specialization | undefined> {
		const specialization = this.specializationRepository.findOne(id);

		return specialization;
	}

	async findByName(
		specializationName: string
	): Promise<Specialization | undefined> {
		const specialization = this.specializationRepository.findOne({
			where: {
				description: specializationName,
			},
		});

		return specialization;
	}

	async findAll(): Promise<Specialization[] | undefined> {
		const specializations = this.specializationRepository.find();

		return specializations;
	}
}
