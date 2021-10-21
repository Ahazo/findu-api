import { injectable, inject } from 'tsyringe';

import Recommendation from '../../infra/typeorm/entities/Recommendation';
import IRecommendationRepository from '../../repositories/IRecommendationRepository';

@injectable()
export default class UpdateRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: IRecommendationRepository
	) {}

	public async execute(data: Recommendation): Promise<Recommendation> {
		return this.recommendationRepository.update(data);
	}
}
