import { injectable, inject } from 'tsyringe';

import Recommendation from '../../infra/typeorm/entities/Recommendation';
import RecommendationRepository from '../../infra/typeorm/repositories/RecommendationRepository';

@injectable()
export default class FindRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: RecommendationRepository
	) {}

	public async executeById(id: number): Promise<Recommendation | undefined> {
		const find = await this.recommendationRepository.findById(id);

		return find;
	}
}
