import { injectable, inject } from 'tsyringe';

import Recommendation from '../../infra/typeorm/entities/Recommendation';
import IRecommendationRepository from '../../repositories/IRecommendationRepository';

@injectable()
export default class FindRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: IRecommendationRepository
	) {}

	public async executeById(id: string): Promise<Recommendation | undefined> {
		const find = await this.recommendationRepository.findById(id);

		return find;
	}
}
