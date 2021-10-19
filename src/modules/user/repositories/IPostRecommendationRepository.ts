import ICreatePostRecommendationDTO from '../dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from '../infra/typeorm/entities/PostRecommendation';

export default interface IPostRecommendationRepository {
	create(data: ICreatePostRecommendationDTO): Promise<PostRecommendation>;
	update(data: PostRecommendation): Promise<PostRecommendation>;
	findById(id: number): Promise<PostRecommendation | undefined>;
}
