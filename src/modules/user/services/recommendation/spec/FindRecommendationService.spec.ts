import ICreateRecommendationDTO from '../../../dtos/Recommendation/ICreateRecommendationDTO';
import Recommendation from '../../../infra/typeorm/entities/Recommendation';
import FakeRecommendationRepository from '../../../repositories/fakes/FakeRecommendationRepository';
import CreateRecommendationService from '../CreateRecommendationService';
import FindRecommendationService from '../FindRecommendationService';

describe('FindRecommendation', () => {
	let fakeRecommendationRepository: FakeRecommendationRepository;

	let createRecommendationService: CreateRecommendationService;
	let findRecommendationService: FindRecommendationService;

	beforeEach(() => {
		fakeRecommendationRepository = new FakeRecommendationRepository();

		createRecommendationService = new CreateRecommendationService(
			fakeRecommendationRepository
		);
		findRecommendationService = new FindRecommendationService(
			fakeRecommendationRepository
		);
	});

	it('should be able to find recommendation service by its ID', async () => {
		const recommendationData: ICreateRecommendationDTO = {
			post_id: 1,
			user_id: 1,
		};

		const recommendation = await createRecommendationService.execute(
			recommendationData
		);

		const find = await findRecommendationService.executeById(recommendation.id);

		expect(find).toBeInstanceOf(Recommendation);
	});

	it('should not be able to find recommendation service by its wrong ID', async () => {
		const recommendationData: ICreateRecommendationDTO = {
			post_id: 1,
			user_id: 1,
		};

		const recommendation = await createRecommendationService.execute(
			recommendationData
		);

		const find = await findRecommendationService.executeById(
			recommendation.id + 1
		);

		expect(find).toEqual(undefined);
	});
});
