import ICreateRecommendationDTO from 'modules/user/dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from 'modules/user/infra/typeorm/entities/Recommendation';
import IRecommendationRepository from 'modules/user/repositories/IRecommendationRepository';
import { getRepository, Repository } from 'typeorm';

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

	async findById(id: number): Promise<Recommendation | undefined> {
		const recommendation = await this.recommendationRepository.findOne(id);

		return recommendation;
	}
}
