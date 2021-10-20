import PostRecommendation from 'modules/user/infra/typeorm/entities/PostRecommendation';
import PostRecommendationRepository from 'modules/user/infra/typeorm/repositories/PostRecommendationRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindPostRecommendationService {
	constructor(
		@inject('PostRecommendationService')
		private postRecommendationRepository: PostRecommendationRepository
	) {}

	public async executeById(
		id: number
	): Promise<PostRecommendation | undefined> {
		const find = await this.postRecommendationRepository.findById(id);

		return find;
	}
}
