import ICreateRecommendationDTO from '../../../dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from '../../../infra/typeorm/entities/Recommendation';
import FakeRecommendationRepository from '../../../repositories/fakes/FakeRecommendationRepository';
import CreateRecommendationService from '../CreateRecommendationService';

describe('CreateRecommendation', () => {
	let fakeRecommendationRepository: FakeRecommendationRepository;
	let createRecommendationService: CreateRecommendationService;

	beforeEach(() => {
		fakeRecommendationRepository = new FakeRecommendationRepository();

		createRecommendationService = new CreateRecommendationService(
			fakeRecommendationRepository
		);
	});

	it('should be able to create recommendation', async () => {
		const recommendationData: ICreateRecommendationDTO = {
			post_id: 1,
			user_id: 1,
		};

		const recommendation = await createRecommendationService.execute(
			recommendationData
		);

		expect(recommendation).toBeInstanceOf(Recommendation);
	});
});
