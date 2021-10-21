import PostRecommendation from 'modules/user/infra/typeorm/entities/PostRecommendation';
import PostRecommendationRepository from 'modules/user/infra/typeorm/repositories/PostRecommendationRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class UpdatePostRecommendationService {
	constructor(
		@inject('PostRecommendationService')
		private postRecommendationRepository: PostRecommendationRepository
	) {}

	public async execute(data: PostRecommendation): Promise<PostRecommendation> {
		return this.postRecommendationRepository.update(data);
	}
}
