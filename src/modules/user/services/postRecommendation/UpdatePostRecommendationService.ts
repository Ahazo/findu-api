import { injectable, inject } from 'tsyringe';

import PostRecommendation from '../../infra/typeorm/entities/PostRecommendation';
import IPostRecommendationRepository from '../../repositories/IPostRecommendationRepository';

@injectable()
export default class UpdatePostRecommendationService {
	constructor(
		@inject('PostRecommendationService')
		private postRecommendationRepository: IPostRecommendationRepository
	) {}

	public async execute(data: PostRecommendation): Promise<PostRecommendation> {
		return this.postRecommendationRepository.update(data);
	}
}
