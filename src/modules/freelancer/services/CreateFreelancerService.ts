import { injectable, inject } from 'tsyringe';

import ICreateFreelancerDTO from '../dtos/ICreateFreelancerDTO';
import Freelancer from '../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../repositories/IFreelancerRepository';

@injectable()
export default class CreateFreelancerService {
	constructor(
		@inject('FreelancerRepository')
		private freelancerRepository: IFreelancerRepository
	) {}

	public async execute(data: ICreateFreelancerDTO): Promise<Freelancer> {
		const result = await this.freelancerRepository.create(data);

		return result;
	}
}
