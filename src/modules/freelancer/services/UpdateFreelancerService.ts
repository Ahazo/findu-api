import { injectable, inject } from 'tsyringe';

import Freelancer from '../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../repositories/IFreelancerRepository';

@injectable()
export default class UpdateFreelancerService {
	constructor(
		@inject('FreelancerRepository')
		private freelancerRepository: IFreelancerRepository
	) {}

	public async execute(freelancer: Freelancer): Promise<Freelancer> {
		return this.freelancerRepository.save(freelancer);
	}
}
