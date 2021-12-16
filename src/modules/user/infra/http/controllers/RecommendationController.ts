import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecommendationService from '../../../services/recommendation/CreateRecommendationService';
import FindRecommendationService from '../../../services/recommendation/FindRecommendationService';
import UpdateRecommendationService from '../../../services/recommendation/UpdateRecommendationService';

export default class RecommendationController {
	async create(request: Request, response: Response): Promise<Response> {
		const recommendationData = request.body;
		const createRecommendation = container.resolve(CreateRecommendationService);

		const recommendation = createRecommendation.execute(recommendationData);

		if (!recommendation)
			response.status(400).json({
				message: 'There was an error creating your new recommendation',
			});

		return response.status(200).json(recommendation);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateRecommendation = container.resolve(UpdateRecommendationService);
		const recommendationData = request.body;

		const recommendation = updateRecommendation.execute(recommendationData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findRecommendation = container.resolve(FindRecommendationService);
		const { id } = request.body;

		const recommendation = findRecommendation.executeById(id);

		if (!recommendation) {
			response.status(500).json({
				message: 'Recommendation ID not found',
			});
		}

		return response.status(200).json(recommendation);
	}
}
