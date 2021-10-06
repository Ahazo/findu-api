import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindAreaService from '../../../services/area/FindAreaService';
import UpdateAreaService from '../../../services/area/UpdateAreaService';
import CreateSkillService from '../../../services/skill/CreateSkillService';

export default class AreaController {
	async create(request: Request, response: Response): Promise<Response> {
		const areaData = request.body;

		const createArea = container.resolve(CreateSkillService);
		const area = await createArea.execute(areaData);

		if (!area)
			response.status(400).json({
				message: 'There was an error creating your area',
			});

		return response.status(200).json(area);
	}

	async findByName(request: Request, response: Response): Promise<Response> {
		const findArea = container.resolve(FindAreaService);
		const { description } = request.params;
		const area = await findArea.executeByName(description);

		if (!area) {
			response.status(500).json({
				message: 'Area not found',
			});
		}

		return response.status(200).json(area);
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findArea = container.resolve(FindAreaService);
		const { id } = request.params;
		const area = await findArea.executeByName(id);

		if (!area) {
			response.status(500).json({
				message: 'Area not found',
			});
		}

		return response.status(200).json(area);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateArea = container.resolve(UpdateAreaService);
		const areaData = request.body;

		const area = await updateArea.execute(areaData);

		return response.status(204).send(area);
	}
}
