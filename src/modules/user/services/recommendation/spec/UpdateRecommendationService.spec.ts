import FakeRecommendationRepository from '../../../repositories/fakes/FakeRecommendationRepository';
import CreateRecommendationService from '../CreateRecommendationService';
import UpdateRecommendationService from '../UpdateRecommendationService';

describe('UpdateRecommendation', () => {
	let fakeRecommendationRepository: FakeRecommendationRepository;

	let createRecommendationService: CreateRecommendationService;
	let updateRecommendationService: UpdateRecommendationService;

	beforeEach(() => {
		fakeRecommendationRepository = new FakeRecommendationRepository();

		createRecommendationService = new CreateRecommendationService(
			fakeRecommendationRepository
		);
		updateRecommendationService = new UpdateRecommendationService(
			fakeRecommendationRepository
		);
	});

	it('should be able to update recommendation', async () => {
		const recommendation = await createRecommendationService.execute({
			post_id: 1,
			user_id: 1,
		});

		const update = await updateRecommendationService.execute({
			...recommendation,
			id: recommendation.id,
			user_id: 2,
		});

		expect(update.user_id).toEqual(2);
	});
});
