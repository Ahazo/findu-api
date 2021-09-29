import { injectable, inject } from 'tsyringe';

import Freelancer from '../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../repositories/IFreelancerRepository';

interface IRequestDTO {
	freelancerId: number;
	open_to_work?: boolean;
	skill?: string;
}

@injectable()
export default class SaveFreelancerService {
	constructor(
		@inject('FreelancerRepository')
		private freelancerRepository: IFreelancerRepository
	) {}

	public async execute({
		freelancerId,
		open_to_work,
		skill,
	}: IRequestDTO): Promise<Freelancer> {
		const freelancer = await this.freelancerRepository.findById(freelancerId);

		if (!freelancer) {
			throw new Error('User not found');
		}

		// tratamento de erros a ser discutido????

		return this.freelancerRepository.save(freelancer);
	}
}
