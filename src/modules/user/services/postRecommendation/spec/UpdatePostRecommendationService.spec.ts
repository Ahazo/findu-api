import FakePostRecommendationRepository from '../../../repositories/fakes/FakePostRecommendationRepository';
import CreatePostRecommendationService from '../CreatePostRecommendationService';
import UpdatePostRecommendationService from '../UpdatePostRecommendationService';

describe('UpdatePostRecommendation', async () => {
	let fakePostRecommendationRepository: FakePostRecommendationRepository;

	let createPostRecommendationService: CreatePostRecommendationService;
	let updatePostRecommendationService: UpdatePostRecommendationService;

	beforeEach(() => {
		fakePostRecommendationRepository = new FakePostRecommendationRepository();

		createPostRecommendationService = new CreatePostRecommendationService(
			fakePostRecommendationRepository
		);
		updatePostRecommendationService = new UpdatePostRecommendationService(
			fakePostRecommendationRepository
		);
	});

	it('should be able to update post recommendation', async () => {
		const recommendation = await createPostRecommendationService.execute({
			user_id: 1,
			freelancer_id: 1,
			order_id: 1,
			content: 'mt bom compra ai',
		});

		const update = await updatePostRecommendationService.execute({
			...recommendation,
			id: recommendation.id,
			content: 'meia boka meia tigela',
		});

		expect(update.content).toEqual('meia boka meia tigela');
	});
});
