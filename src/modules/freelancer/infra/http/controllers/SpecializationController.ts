import { Request, Response } from 'express';
import FindAreaService from 'modules/freelancer/services/area/FindAreaService';
import { container } from 'tsyringe';

import CreateSpecializationService from '../../../services/specialization/CreateSpecializationService';
import FindSpecializationService from '../../../services/specialization/FindSpecializationService';

export default class SpecializationController {
	async create(request: Request, response: Response): Promise<Response> {
		const specializationCreate = container.resolve(CreateSpecializationService);
		const specializationData = request.body;

		const specialization = await specializationCreate.execute(
			specializationData
		);

		if (!specialization)
			response.status(400).json({
				message: 'There was an error creating your specialization',
			});

		return response.status(200).json(specialization);
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findSpecialization = container.resolve(FindSpecializationService);
		const { id } = request.params;

		const specialization = findSpecialization.executeById(+id);

		if (!specialization) {
			response.status(500).json({
				message: 'Specialization ID not found',
			});
		}

		return response.status(200).json(specialization);
	}
}
