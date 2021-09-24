import { json, Request, Response } from 'express';
import CreateInfluencerLevelService from 'modules/user/services/influencerLevel/CreateInfluencerLevelService';
import FindInfluencerLevelService from 'modules/user/services/influencerLevel/FindInfluencerLevelService';
import { container } from 'tsyringe';

export default class InfluencerLevelController {
	async createInfluencerLevel(request: Resquest, responde: Response) {
		const influencerLevelData = request.body;
		const createInfluencerLevel = container.resolve(
			CreateInfluencerLevelService
		);
		const influencerLevel = await createInfluencerLevel.execute(
			influencerLevelData
		);

		return responde.status(200).json(influencerLevel);
	}

	async findById(request: Request, response: Response) {
		const findInfluencerLevel = container.resolve(FindInfluencerLevelService);
		const { id } = request.params;
		const influencerLevel = await findInfluencerLevel.executeById(+id);

		if (!influencerLevel) {
			response.status(400).json({
				message: 'Influencer Level id not found',
			});
		}

		response.status(200).json(influencerLevel);
	}
}
