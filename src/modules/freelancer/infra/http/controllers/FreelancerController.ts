import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateFreelancerService from '../../../services/CreateFreelancerService';
import FindFreelancerService from '../../../services/FindFreelancerService';

export default class FreelancerController {
	async createUser(request: Request, response: Response): Promise<Response> {
		const freelancerData = request.body;
		const createFreelancer = container.resolve(CreateFreelancerService);
		const freelancer = await createFreelancer.execute(freelancerData);

		return response.status(200).json({
			freelancer,
		});
	}

	async findFreelancerById(
		request: Request,
		response: Response
	): Promise<Response> {
		const findFreelancer = container.resolve(FindFreelancerService);
		const { id } = request.params;
		const freelancer = await findFreelancer.executeById(+id);

		if (!freelancer) {
			response.status(400).json({
				message: 'Freelancer id not found',
			});
		}

		return response.status(200).json(freelancer);
	}
}