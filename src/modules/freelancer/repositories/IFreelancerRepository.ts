import ICreateFreelancerDTO from '../dtos/ICreateFreelancerDTO';
import Freelancer from '../infra/typeorm/entities/Freelancer';

export default interface IFreelancerRepository {
	create(data: ICreateFreelancerDTO): Promise<Freelancer>;
	save(freelancer: Freelancer): Promise<Freelancer>;
	findById(id: string): Promise<Freelancer | undefined>;
	findByUserId(id: string): Promise<Freelancer | undefined>;
}
