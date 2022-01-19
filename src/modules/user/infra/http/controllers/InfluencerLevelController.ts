import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInfluencerLevelService from '../../../services/influencerLevel/CreateInfluencerLevelService';
import FindInfluencerLevelService from '../../../services/influencerLevel/FindInfluencerLevelService';

export default class InfluencerLevelController {
	async createInfluencerLevel(
		request: Request,
		responde: Response
	): Promise<Response> {
		const influencerLevelData = request.body;
		const createInfluencerLevel = container.resolve(
			CreateInfluencerLevelService
		);
		const influencerLevel = await createInfluencerLevel.execute(
			influencerLevelData
		);

		return responde.status(200).json(influencerLevel);
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findInfluencerLevel = container.resolve(FindInfluencerLevelService);
		const { id } = request.params;
		const influencerLevel = await findInfluencerLevel.executeById(+id);

		if (!influencerLevel) {
			response.status(400).json({
				message: 'Influencer Level id not found',
			});
		}

		return response.status(200).json(influencerLevel);
	}

	async findByLevelNumber(
		request: Request,
		response: Response
	): Promise<Response> {
		const findInfluencerLevel = container.resolve(FindInfluencerLevelService);
		const { levelNumber } = request.params;
		const influencerLevel = await findInfluencerLevel.executeByLevelNumber(
			+levelNumber
		);

		if (!influencerLevel) {
			response.status(400).json({
				message: 'Influencer Level number not found',
			});
		}

		return response.status(200).json(influencerLevel);
	}
}
