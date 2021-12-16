import ICreateRecommendationDTO from '../dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from '../infra/typeorm/entities/Recommendation';

export default interface IRecommendationRepository {
	create(data: ICreateRecommendationDTO): Promise<Recommendation>;
	update(data: Recommendation): Promise<Recommendation>;
	findById(id: number): Promise<Recommendation | undefined>;
}
