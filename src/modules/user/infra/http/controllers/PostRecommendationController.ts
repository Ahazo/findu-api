import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostRecommendationService from '../../../services/postRecommendation/CreatePostRecommendationService';
import FindPostRecommendationService from '../../../services/postRecommendation/FindPostRecommendationService';
import UpdatePostRecommendationService from '../../../services/postRecommendation/UpdatePostRecommendationService';

export default class PostRecommendationController {
	async create(request: Request, response: Response): Promise<Response> {
		const postRecommendationData = request.body;
		const createPostRecommendation = container.resolve(
			CreatePostRecommendationService
		);

		const postRecommendation = await createPostRecommendation.execute(
			postRecommendationData
		);

		if (!postRecommendation)
			response.status(400).json({
				message: 'There was an error creating your new post recommendation',
			});

		return response.status(200).json(postRecommendation);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updatePostRecommendation = container.resolve(
			UpdatePostRecommendationService
		);
		const postRecommendationData = request.body;

		await updatePostRecommendation.execute(postRecommendationData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findPostRecommendation = container.resolve(
			FindPostRecommendationService
		);

		const { id } = request.params;
		const postRecommendation = await findPostRecommendation.executeById(id);

		if (!postRecommendation) {
			response.status(500).json({
				message: 'Post Recommendation ID not found',
			});
		}

		return response.status(200).json(postRecommendation);
	}
}
