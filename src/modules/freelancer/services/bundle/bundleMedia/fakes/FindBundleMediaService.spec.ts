import FakeBundleMediaRepository from '../../../../freelancer/repositories/bundle/fakes/FakeBundleMediaRepository';
import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
import CreateBundleMediaService from '../CreateBundleMediaService';
import FindBundleMediaService from '../FindBundleMediaService';

describe('FindBundleMedia', () => {
	let fakeBundleMediaRepository: FakeBundleMediaRepository;

	let createBundleMediaService: CreateBundleMediaService;
	let findBundleMediaService: FindBundleMediaService;

	beforeEach(() => {
		fakeBundleMediaRepository = new FakeBundleMediaRepository();

		createBundleMediaService = new CreateBundleMediaService(
			fakeBundleMediaRepository
		);

		findBundleMediaService = new FindBundleMediaService(
			fakeBundleMediaRepository
		);
	});

	it('should be able to find bundle media by its ID', async () => {
		const bundleMedia = await createBundleMediaService.execute({
			bundle_id: 1,
			url: 'www.facebruk.com',
		});

		expect(await findBundleMediaService.executeById(bundleMedia.id)).toBe(
			bundleMedia
		);
	});

	it('should be not able to find bundle media by its wrong ID', async () => {
		const bundleMedia = await createBundleMediaService.execute({
			bundle_id: 1,
			url: 'www.facebruk.com',
		});

		expect(await findBundleMediaService.executeById(bundleMedia.id + 1)).toBe(
			undefined
		);
	});
});
