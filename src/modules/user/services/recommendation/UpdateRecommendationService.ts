import { injectable, inject } from 'tsyringe';

import Recommendation from '../../infra/typeorm/entities/Recommendation';
import RecommendationRepository from '../../infra/typeorm/repositories/RecommendationRepository';

@injectable()
export default class UpdateRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: RecommendationRepository
	) {}

	public async execute(data: Recommendation): Promise<Recommendation> {
		return this.recommendationRepository.update(data);
	}
}
