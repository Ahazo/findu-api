import ICreatePostRecommendationDTO from '../../dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from '../../infra/typeorm/entities/PostRecommendation';
import IPostRecommendationRepository from '../IPostRecommendationRepository';

export default class FakePostRecommendationRepository
	implements IPostRecommendationRepository
{
	private posts: PostRecommendation[] = [];

	public async create(
		data: ICreatePostRecommendationDTO
	): Promise<PostRecommendation> {
		const postRecommendations = new PostRecommendation();

		Object.assign(
			postRecommendations,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.posts.push(postRecommendations);
		return postRecommendations;
	}

	public async update(data: PostRecommendation): Promise<PostRecommendation> {
		const findIndex = this.posts.findIndex((find) => find.id === data.id);

		this.posts[findIndex] = data;

		return this.posts[findIndex];
	}

	public async findById(id: string): Promise<PostRecommendation | undefined> {
		const findIndex = this.posts.find((find) => find.id === id);

		return findIndex;
	}
}
