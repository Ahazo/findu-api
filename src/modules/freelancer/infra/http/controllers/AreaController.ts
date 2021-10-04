import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAreaService from '../../../services/area/CreateAreaService';

export default class AreaController {
	async createArea(request: Request, response: Response): Promise<Response> {
		const areaData = request.body;
		const createArea = container.resolve(CreateAreaService);

		return response.status(200).json({
			createArea,
		});
	}

// 	async findAreaById(request: Request, response: Response): Promise<Response> {}

// 	async findAreaByName(
// 		request: Request,
// 		response: Response
// 	): Promise<Response> {}

// 	async updateArea(request: Request, response: Response): Promise<Response> {}
// }
