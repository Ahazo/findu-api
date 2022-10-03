import { v4 as uuid } from 'uuid';

import { EStatus } from '../../../../../shared/utils/enums/EStatus';
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
			recommended_freelancer_id: uuid(),
			user_id: uuid(),
		});

		const update = await updateRecommendationService.execute({
			...recommendation,
			id: recommendation.id,
			status: EStatus.deleted,
		});

		expect(update.status).toEqual(EStatus.deleted);
	});
});
