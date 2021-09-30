import ICreateSpecializationDTO from '../../../../dtos/ICreateSpecializationDTO';
import ISpecializationRepository from '../../../../repositories/ISpecializationRepository';
import Specialization from '../../entities/Specialization';

class FakeSpecializationRepository implements ISpecializationRepository {
	private specializations: Specialization[] = [];

	async create(data: ICreateSpecializationDTO): Promise<Specialization> {
		const specialization = new Specialization();

		Object.assign(
			specialization,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			data
		);

		this.specializations.push(specialization);
		return specialization;
	}

	async save(specialization: Specialization): Promise<Specialization> {
		const findIndex = this.specializations.findIndex(
			(findSpecialization) => findSpecialization.id === specialization.id
		);

		this.specializations[findIndex] = specialization;

		return specialization;
	}

	async findById(id: number): Promise<Specialization | undefined> {
		const specializationFound = this.specializations.find(
			(specialization) => specialization.id === id
		);

		return specializationFound;
	}

	async findByName(name: string): Promise<Specialization | undefined> {
		const specializationFound = this.specializations.find(
			(specialization) => specialization.description === name
		);

		return specializationFound;
	}
}
