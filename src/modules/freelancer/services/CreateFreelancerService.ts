import { injectable, inject } from 'tsyringe';

import IUserRepository from '../../user/repositories/IUserRepository';
import ICreateFreelancerDTO from '../dtos/ICreateFreelancerDTO';
import Freelancer from '../infra/typeorm/entities/Freelancer';
import IFreelancerRepository from '../repositories/IFreelancerRepository';

@injectable()
export default class CreateFreelancerService {
	constructor(
		@inject('FreelancerRepository')
		private freelancerRepository: IFreelancerRepository,

		@inject('UsersRepository')
		private userRepository: IUserRepository
	) {}

	public async execute(data: ICreateFreelancerDTO): Promise<Freelancer> {
		console.log('USER_ID', data);
		const checkUserExists = await this.userRepository.findById(data.user_id);

		if (!checkUserExists) throw new Error('User not found');

		const isUserAlreadyFreelancer =
			await this.freelancerRepository.findByUserId(data.user_id);

		if (isUserAlreadyFreelancer)
			throw new Error('User already exists in Freelancer');

		const result = await this.freelancerRepository.create(data);

		return result;
	}
}
