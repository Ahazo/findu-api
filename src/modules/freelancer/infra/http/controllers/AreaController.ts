import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAreaService from '../../../services/area/CreateAreaService';
import FindAreaService from '../../../services/area/FindAreaService';
import UpdateAreaService from '../../../services/area/UpdateAreaService';

export default class AreaController {
	async create(request: Request, response: Response): Promise<Response> {
		const areaData = request.body;

		const createArea = container.resolve(CreateAreaService);
		const area = await createArea.execute(areaData);

		if (!area)
			response.status(400).json({
				message: 'There was an error creating new area',
			});

		return response.status(200).json(area);
	}

	async findByDescription(
		request: Request,
		response: Response
	): Promise<Response> {
		const findArea = container.resolve(FindAreaService);
		const { description } = request.params;
		const area = await findArea.executeByDescription(description);

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
		const area = await findArea.executeByDescription(id);

		if (!area) {
			response.status(500).json({
				message: 'Area ID not found',
			});
		}

		return response.status(200).json(area);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateArea = container.resolve(UpdateAreaService);
		const areaData = request.body;

		await updateArea.execute(areaData);

		return response.status(204).send();
	}
}
