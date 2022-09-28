import { getRepository, Repository } from 'typeorm';

import ICreateFreelancerDTO from '../../../dtos/ICreateFreelancerDTO';
import IFreelancerRepository from '../../../repositories/IFreelancerRepository';
import Freelancer from '../entities/Freelancer';

class FreelancerRepository implements IFreelancerRepository {
	private freelancerRepository: Repository<Freelancer>;

	constructor() {
		this.freelancerRepository = getRepository(Freelancer);
	}

	public async create(
		freelancerData: ICreateFreelancerDTO
	): Promise<Freelancer> {
		const freelancer = this.freelancerRepository.create(freelancerData);

		await this.freelancerRepository.save(freelancer);
		return freelancer;
	}

	public async save(freelancer: Freelancer): Promise<Freelancer> {
		return this.freelancerRepository.save(freelancer);
	}

	public async findById(id: string): Promise<Freelancer | undefined> {
		const freelancer = await this.freelancerRepository.findOne(id);
		return freelancer;
	}

	public async findByUserId(user_id: string): Promise<Freelancer | undefined> {
		const freelancer = await this.freelancerRepository.findOne(user_id);
		return freelancer;
	}
}

export default FreelancerRepository;
