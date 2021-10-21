import ICreatePostRecommendationDTO from 'modules/user/dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from 'modules/user/infra/typeorm/entities/PostRecommendation';
import IPostRecommendationRepository from 'modules/user/repositories/IPostRecommendationRepository';
import { injectable, inject } from 'tsyringe';

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
