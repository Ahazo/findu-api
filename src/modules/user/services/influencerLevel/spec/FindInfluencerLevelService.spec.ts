import ICreateInfluencerLevelDTO from 'modules/user/dtos/ICreateInfluencerLevelDTO';

import FakeInfluencerLevelRepository from '../../../infra/typeorm/repositories/fakes/FakeInfluencerLevelRepository';
import CreateInfluencerLevelService from '../CreateInfluencerLevelService';
import FindInfluencerLevelService from '../FindInfluencerLevelService';

describe('Find InfluencerLevel', () => {
	it('should be able to find influencer level by its ID', async () => {
		const fakeInfluencerLevel = new FakeInfluencerLevelRepository();

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevel
		);

		const FindInfluencerLevel = new FindInfluencerLevelService(
			fakeInfluencerLevel
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'A little mighty',
			experience_needed: 1,
		};

		const lvl = await CreateInfluencerLevel.execute(levelData);

		const find = await FindInfluencerLevel.executeById(lvl.id);

		expect(find).toEqual(lvl);
	});

	it('should not be able to find influencer level without ID', async () => {
		const fakeInfluencerLevel = new FakeInfluencerLevelRepository();

		const CreateInfluencerLevel = new CreateInfluencerLevelService(
			fakeInfluencerLevel
		);

		const FindInfluencerLevel = new FindInfluencerLevelService(
			fakeInfluencerLevel
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'A little mighty',
			experience_needed: 1,
		};

		const lvl = await CreateInfluencerLevel.execute(levelData);

		const find = await FindInfluencerLevel.executeById(lvl.id + 1);

		expect(find).toEqual(undefined);
	});
});
