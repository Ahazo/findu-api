import ICreateFreelancerDTO from '../dtos/ICreateFreelancerDTO';
import Freelancer from '../infra/typeorm/entities/Freelancer';

export default interface IFreelancerRepository {
	create(data: ICreateFreelancerDTO): Promise<Freelancer>;
	findById(id: number): Promise<Freelancer | undefined>;
	save(freelancer: Freelancer): Promise<Freelancer>;
}
