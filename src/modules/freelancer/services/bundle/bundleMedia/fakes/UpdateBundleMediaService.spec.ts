import FakeBundleMediaRepository from '../../../../freelancer/repositories/bundle/fakes/FakeBundleMediaRepository';
import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
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
		const bundleMedia = await createBundleMediaService.execute({
			bundle_id: 1,
			url: 'www.facebruk.com',
		});

		const updatedBundle = await updateBundleMediaService.execute({
			...bundleMedia,
			id: bundleMedia.id,
			url: 'www.google.com',
		});

		expect(updatedBundle.url).toBe('www.google.com');
	});
});
