import IRecommendationRepository from 'modules/user/repositories/IRecommendationRepository';
import { injectable, inject } from 'tsyringe';

import ICreateRecommendationDTO from '../../dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from '../../infra/typeorm/entities/Recommendation';

@injectable()
export default class CreateRecommendationService {
	constructor(
		@inject('RecommendationRepository')
		private recommendationRepository: IRecommendationRepository
	) {}

	public async execute(
		data: ICreateRecommendationDTO
	): Promise<Recommendation> {
		const recommendation = await this.recommendationRepository.create(data);

		return recommendation;
	}
}
