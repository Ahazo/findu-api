import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../IFreelancerRepository';

class FakeFreelancerRepository implements IFreelancerRepository {
	private freelancers: Freelancer[] = [];

	public async create(data: ICreateFreelancerDTO): Promise<Freelancer> {
		const freelancer = new Freelancer();

		Object.assign(
			freelancer,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.freelancers.push(freelancer);
		return freelancer;
	}

	public async save(freelancer: Freelancer): Promise<Freelancer> {
		const findIndex = this.freelancers.findIndex(
			(findFreelancer) => findFreelancer.id === freelancer.id
		);

		this.freelancers[findIndex] = freelancer;

		return freelancer;
	}

	public async findById(id: number): Promise<Freelancer | undefined> {
		const freelancerFound = this.freelancers.find(
			(freelancer) => freelancer.id === id
		);
		return freelancerFound;
	}

	public async findByUserId(id: number): Promise<Freelancer | undefined> {
		const freelancerFound = this.freelancers.find(
			(freelancer) => freelancer.user_id === id
		);

		return freelancerFound;
	}
}

export default FakeFreelancerRepository;
