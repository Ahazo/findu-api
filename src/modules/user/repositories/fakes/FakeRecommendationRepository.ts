import ICreateRecommendationDTO from '../../dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from '../../infra/typeorm/entities/Recommendation';
import IRecommendationRepository from '../IRecommendationRepository';

export default class FakeRecommendationRepository
	implements IRecommendationRepository
{
	private recommendations: Recommendation[] = [];

	public async create(data: ICreateRecommendationDTO): Promise<Recommendation> {
		const recc = new Recommendation();

		Object.assign(
			recc,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.recommendations.push(recc);
		return recc;
	}

	public async update(data: Recommendation): Promise<Recommendation> {
		const findIndex = this.recommendations.findIndex(
			(find) => find.id === data.id
		);

		this.recommendations[findIndex] = data;

		return data;
	}

	public async findById(id: string): Promise<Recommendation | undefined> {
		const findIndex = this.recommendations.find((find) => find.id === id);

		return findIndex;
	}
}
