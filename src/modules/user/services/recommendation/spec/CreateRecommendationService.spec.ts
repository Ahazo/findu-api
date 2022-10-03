import { v4 as uuid } from 'uuid';

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
		const recommendation = await createRecommendationService.execute({
			recommended_freelancer_id: uuid(),
			user_id: uuid(),
		});

		expect(recommendation).toBeInstanceOf(Recommendation);
	});
});
