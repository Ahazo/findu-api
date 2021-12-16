import PostRecommendation from '../../../infra/typeorm/entities/PostRecommendation';
import FakePostRecommendationRepository from '../../../repositories/fakes/FakePostRecommendationRepository';
import CreatePostRecommendationService from '../CreatePostRecommendationService';
import FindPostRecommendationService from '../FindPostRecommendationService';

describe('FindPostRecommendation', () => {
	let fakePostRecommendationRepository: FakePostRecommendationRepository;

	let createPostRecommendationService: CreatePostRecommendationService;
	let findPostRecommendationService: FindPostRecommendationService;

	beforeEach(() => {
		fakePostRecommendationRepository = new FakePostRecommendationRepository();

		createPostRecommendationService = new CreatePostRecommendationService(
			fakePostRecommendationRepository
		);
		findPostRecommendationService = new FindPostRecommendationService(
			fakePostRecommendationRepository
		);
	});

	it('should be able to find post recommendation by its ID', async () => {
		const recommendation = await createPostRecommendationService.execute({
			user_id: 1,
			freelancer_id: 1,
			order_id: 1,
			content: 'mt bom compra ai',
		});

		expect(
			await findPostRecommendationService.executeById(recommendation.id)
		).toBeInstanceOf(PostRecommendation);
	});

	it('should not be able to find post recommendation by its wrong ID', async () => {
		const recommendation = await createPostRecommendationService.execute({
			user_id: 1,
			freelancer_id: 1,
			order_id: 1,
			content: 'mt bom compra ai',
		});

		expect(
			await findPostRecommendationService.executeById(recommendation.id + 1)
		).toEqual(undefined);
	});
});
