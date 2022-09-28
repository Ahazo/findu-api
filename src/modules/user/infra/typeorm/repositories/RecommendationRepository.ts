import { getRepository, Repository } from 'typeorm';

import ICreateRecommendationDTO from '../../../dtos/Recommendation/ICreateRecommendationDTO';
import IRecommendationRepository from '../../../repositories/IRecommendationRepository';
import Recommendation from '../entities/Recommendation';

export default class RecommendationRepository
	implements IRecommendationRepository
{
	private recommendationRepository: Repository<Recommendation>;

	constructor() {
		this.recommendationRepository = getRepository(Recommendation);
	}

	async create(data: ICreateRecommendationDTO): Promise<Recommendation> {
		const recommendation = await this.recommendationRepository.create(data);

		await this.recommendationRepository.save(recommendation);

		return recommendation;
	}

	async update(data: Recommendation): Promise<Recommendation> {
		return this.recommendationRepository.save(data);
	}

	async findById(id: string): Promise<Recommendation | undefined> {
		const recommendation = await this.recommendationRepository.findOne(id);

		return recommendation;
	}
}
