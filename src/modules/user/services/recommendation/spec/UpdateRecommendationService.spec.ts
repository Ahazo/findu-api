import ICreateRecommendationDTO from 'modules/user/dtos/Recommendation/ICreateRecommendationDTO';
import FakeRecommendationRepository from 'modules/user/infra/typeorm/repositories/fakes/FakeRecommendationRepository';

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

		it('should be able to update recommendation', async () => {
			const recommendationData: ICreateRecommendationDTO = {
				post_id: 1,
				user_id: 1,
			};

			const recommendation = await createRecommendationService.execute(
				recommendationData
			);

			const update = await updateRecommendationService.execute({
				id: recommendationData.id,

			})
			);
		});
	});
});
