import ICreatePostRecommendationDTO from 'modules/user/dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from 'modules/user/infra/typeorm/entities/PostRecommendation';
import PostRecommendationRepository from 'modules/user/infra/typeorm/repositories/PostRecommendationRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreatePostRecommendationService {
	constructor(
		@inject('PostRecommendationRepository')
		private postRecommendationRepository: PostRecommendationRepository
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
