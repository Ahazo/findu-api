import { injectable, inject } from 'tsyringe';

import PostRecommendation from '../../infra/typeorm/entities/PostRecommendation';
import IPostRecommendationRepository from '../../repositories/IPostRecommendationRepository';

@injectable()
export default class FindPostRecommendationService {
	constructor(
		@inject('PostRecommendationService')
		private postRecommendationRepository: IPostRecommendationRepository
	) {}

	public async executeById(
		id: number
	): Promise<PostRecommendation | undefined> {
		const find = await this.postRecommendationRepository.findById(id);

		return find;
	}
}
