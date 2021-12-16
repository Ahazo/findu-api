import { getRepository, Repository } from 'typeorm';

import ICreatePostRecommendationDTO from '../../../dtos/Recommendation/ICreatePostRecommendationDTO';
import IPostRecommendationRepository from '../../../repositories/IPostRecommendationRepository';
import PostRecommendation from '../entities/PostRecommendation';

export default class PostRecommendationRepository
	implements IPostRecommendationRepository
{
	private postRecRepository: Repository<PostRecommendation>;

	constructor() {
		this.postRecRepository = getRepository(PostRecommendation);
	}

	async create(
		data: ICreatePostRecommendationDTO
	): Promise<PostRecommendation> {
		const postRec = this.postRecRepository.create(data);

		await this.postRecRepository.save(postRec);

		return postRec;
	}

	async update(data: PostRecommendation): Promise<PostRecommendation> {
		return this.postRecRepository.save(data);
	}

	async findById(id: number): Promise<PostRecommendation | undefined> {
		const postRec = await this.postRecRepository.findOne(id);

		return postRec;
	}
}
