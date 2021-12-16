import { injectable, inject } from 'tsyringe';

import ICreatePostRecommendationDTO from '../../dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from '../../infra/typeorm/entities/PostRecommendation';
import IPostRecommendationRepository from '../../repositories/IPostRecommendationRepository';

@injectable()
export default class CreatePostRecommendationService {
	constructor(
		@inject('PostRecommendationRepository')
		private postRecommendationRepository: IPostRecommendationRepository
	) {}

	public async execute(
		data: ICreatePostRecommendationDTO
	): Promise<PostRecommendation> {
		const postRecommendation = await this.postRecommendationRepository.create(
			data
		);

		return postRecommendation;
	}
}
