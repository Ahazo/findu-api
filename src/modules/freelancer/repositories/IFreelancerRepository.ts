import ICreateFreelancerDTO from '../dtos/ICreateFreelancerDTO';
import Freelancer from '../infra/typeorm/entities/Freelancer';

export default interface IFreelancerRepository {
	create(data: ICreateFreelancerDTO): Promise<Freelancer>;
	save(freelancer: Freelancer): Promise<Freelancer>;
	findById(id: number): Promise<Freelancer | undefined>;
	findByUserId(id: number): Promise<Freelancer | undefined>;
}
