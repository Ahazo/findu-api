import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProfessionalLevelService from '../../../services/professionalLevel/CreateProfessionalLevelService';
import FindProfessionalLevelService from '../../../services/professionalLevel/FindProfessionalLevelService';

export default class ProfessionalLevelController {
	async createProfessionalLevel(
		request: Request,
		response: Response
	): Promise<Response> {
		const professionalLevelData = request.body;

		const createProfessionalLevel = container.resolve(
			CreateProfessionalLevelService
		);

		const professionalLevel = await createProfessionalLevel.execute(
			professionalLevelData
		);

		if (!professionalLevel)
			response.status(400).json({
				message: 'There was an error creating professional level',
			});

		return response.status(200).json(professionalLevel);
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findProfessionalLevel = container.resolve(
			FindProfessionalLevelService
		);
		const { id } = request.params;
		const professionalLevel = await findProfessionalLevel.executeById(+id);

		if (!professionalLevel) {
			response.status(400).json({
				message: 'Professional Level id not found',
			});
		}

		return response.status(200).json(professionalLevel);
	}
}
