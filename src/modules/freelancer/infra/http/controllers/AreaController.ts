import { container } from 'tsyringe';

export default class AreaController {
	async createArea(request: Request, response: Response): Promise<Reponse> {
		const areaData = request.body;
		const createArea = container.resolve(CreateAreaService);
	}

	async findAreaById(request: Request, response: Response): Promise<Response> {}

	async findAreaByName(
		request: Request,
		response: Response
	): Promise<Response> {}

	async updateArea(request: Request, response: Response): Promise<Response> {}
}
