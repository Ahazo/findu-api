// import AppError from '../../../shared/errors/AppError';

import ICreateInfluencerLevelDTO from '../../../dtos/ICreateInfluencerLevelDTO';
import InfluencerLevel from '../../../infra/typeorm/entities/InfluencerLevel';
import FakeInfluencerLevelRepository from '../../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import CreateInfluencerLevelService from '../CreateInfluencerLevelService';

describe('CreateInfluencerLevel', () => {
	it('should be able to create influencerLevel', async () => {
		const fakeInfluencerLevelRepository = new FakeInfluencerLevelRepository();

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		expect(await CreateInfluencerLevel.execute(levelData)).toBeInstanceOf(
			InfluencerLevel
		);
	});
});
