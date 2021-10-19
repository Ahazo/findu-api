import ICreatePostRecommendationDTO from '../../../../dtos/Recommendation/ICreatePostRecommendationDTO';
import IPostRecommendationRepository from '../../../../repositories/IPostRecommendationRepository';
import PostRecommendation from '../../entities/PostRecommendation';

export default class FakePostRecommendationRepository
	implements IPostRecommendationRepository
{
	private postRecs: PostRecommendation[] = [];

	public async create(
		data: ICreatePostRecommendationDTO
	): Promise<PostRecommendation> {
		const postRecommendations = new PostRecommendation();

		Object.assign(
			postRecommendations,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.postRecs.push(postRecommendations);
		return postRecommendations;
	}

	public async update(data: PostRecommendation): Promise<PostRecommendation> {
		const findIndex = this.postRecs.findIndex((find) => find.id === data.id);

		this.postRecs[findIndex] = data;

		return this.postRecs[findIndex];
	}

	public async findById(id: number): Promise<PostRecommendation | undefined> {
		const findIndex = this.postRecs.find((find) => find.id === id);

		return findIndex;
	}
}
