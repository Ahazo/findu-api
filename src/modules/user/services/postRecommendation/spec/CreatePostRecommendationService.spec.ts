import ICreatePostRecommendationDTO from '../../../dtos/Recommendation/ICreatePostRecommendationDTO';
import PostRecommendation from '../../../infra/typeorm/entities/PostRecommendation';
import FakePostRecommendationRepository from '../../../infra/typeorm/repositories/fakes/FakePostRecommendationRepository';
import CreatePostRecommendationService from '../CreatePostRecommendationService';

describe('CreatePostRecommendation', () => {
	let fakePostRecommendationRepository: FakePostRecommendationRepository;

	let createPostRecommendationService: CreatePostRecommendationService;

	beforeEach(() => {
		fakePostRecommendationRepository = new FakePostRecommendationRepository();

		createPostRecommendationService = new CreatePostRecommendationService(
			fakePostRecommendationRepository
		);
	});

	it('should be able to create post recommendations', async () => {
		const postData: ICreatePostRecommendationDTO = {
			user_id: 1,
			freelancer_id: 1,
			order_id: 1,
			content: 'muito bom compra ae rapazeada',
		};

		const post = await createPostRecommendationService.execute(postData);

		expect(post).toBeInstanceOf(PostRecommendation);
	});
});
