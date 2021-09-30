import ICreateProfessionalLevelDTO from '../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../infra/typeorm/entities/ProfessionalLevel';

export default interface IProfessionalLevelRepository {
	create(data: ICreateProfessionalLevelDTO): Promise<ProfessionalLevel>;
	findById(id: number): Promise<ProfessionalLevel | undefined>;
}