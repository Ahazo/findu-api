import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
import FakeBundleMediaRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleMediaRepository';
import CreateBundleMediaService from '../CreateBundleMediaService';
import UpdateBundleMediaService from '../UpdateBundleMediaService';

describe('UpdateBundleMedia', () => {
	let fakeBundleMediaRepository: FakeBundleMediaRepository;

	let createBundleMediaService: CreateBundleMediaService;
	let updateBundleMediaService: UpdateBundleMediaService;

	beforeEach(() => {
		fakeBundleMediaRepository = new FakeBundleMediaRepository();

		createBundleMediaService = new CreateBundleMediaService(
			fakeBundleMediaRepository
		);

		updateBundleMediaService = new UpdateBundleMediaService(
			fakeBundleMediaRepository
		);
	});

	it('should be able to update bundle media', async () => {
		const bundleMediaData: ICreateBundleMediasDTO = {
			bundle_id: 1,
			url: 'www.facebruk.com',
		};

		const bundleMedia = await createBundleMediaService.execute(bundleMediaData);

		const bundleMediaData1: ICreateBundleMediasDTO = {
			bundle_id: 2,
			url: 'www.yotrube.com',
		};

		const bundleMedia1 = await createBundleMediaService.execute(
			bundleMediaData1
		);

		const updatedBundle = await updateBundleMediaService.execute(bundleMedia1);

		expect(updatedBundle).toBe(bundleMedia1);
	});
});
