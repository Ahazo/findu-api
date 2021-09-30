import ICreateFreelancerDTO from '../../../../dtos/ICreateProfessionalLevelDTO';
import IFreelancerRepository from '../../../../repositories/IFreelancerRepository';
import Freelancer from '../../entities/ProfessionalLevel';

class FakeFreelancerRepository implements IFreelancerRepository {
	private freela: Freelancer[] = [];

	public async create(
		freelancerData: ICreateFreelancerDTO
	): Promise<Freelancer> {
		const freelancer = new Freelancer();

		Object.assign(
			freelancer,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			freelancerData
		);

		this.freela.push(freelancer);
		return freelancer;
	}

	public async save(freelancer: Freelancer): Promise<Freelancer> {
		const findIndex = this.freela.findIndex(
			(findFreelancer) => findFreelancer.id === freelancer.id
		);

		this.freela[findIndex] = freelancer;

		return freelancer;
	}

	public async findById(id: number): Promise<Freelancer | undefined> {
		const freelancerFound = this.freela.find((freela) => freela.id === id);
		return freelancerFound;
	}
}

export default FakeFreelancerRepository;
