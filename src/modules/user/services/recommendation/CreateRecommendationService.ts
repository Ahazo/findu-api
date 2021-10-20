import { injectable, inject } from 'tsyringe';

import ICreateRecommendationDTO from '../../dtos/Recommendation/ICreateRecommendation';
import Recommendation from '../../infra/typeorm/entities/Recommendation';
import RecommendationRepository from '../../infra/typeorm/repositories/RecommendationRepository';

@injectable()
export default class CreateRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: RecommendationRepository
	) {}

	public async execute(
		data: ICreateRecommendationDTO
	): Promise<Recommendation> {
		const recommendation = await this.recommendationRepository.create(data);

		return recommendation;
	}
}
