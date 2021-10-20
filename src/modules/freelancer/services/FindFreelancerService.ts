import { injectable, inject } from 'tsyringe';

import Freelancer from '../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../repositories/IFreelancerRepository';

@injectable()
export default class CreateFreelancerService {
	constructor(
		@inject('FreelancerRepository')
		private freelancerRepository: IFreelancerRepository
	) {}

	public async executeById(id: number): Promise<Freelancer | undefined> {
		const result = await this.freelancerRepository.findById(id);

		return result;
	}
}
