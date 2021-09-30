import ICreateSpecializationDTO from '../dtos/ICreateSpecializationDTO';
import Specialization from '../infra/typeorm/entities/Specialization';

export default interface ISpecializationRepository {
	create(data: ICreateSpecializationDTO): Promise<Specialization>;
	save(specialization: Specialization): Promise<Specialization>;
	findById(id: number): Promise<Specialization | undefined>;
	findByName(specializationName: string): Promise<Specialization | undefined>;
}
