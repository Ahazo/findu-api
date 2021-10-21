import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
import FakeBundleMediaRepository from '../../../repositories/fakes/FakeBundleMediaRepository';
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
		const bundleMediaData: ICreateBundleMediasDTO = {
			bundle_id: 1,
			url: 'www.facebruk.com',
		};

		const bundleMedia = await createBundleMediaService.execute(bundleMediaData);

		const find = await findBundleMediaService.executeById(bundleMedia.id);

		expect(find).toBe(bundleMedia);
	});

	it('should be not able to find bundle media by its wrong ID', async () => {
		const bundleMediaData: ICreateBundleMediasDTO = {
			bundle_id: 1,
			url: 'www.facebruk.com',
		};

		const bundleMedia = await createBundleMediaService.execute(bundleMediaData);

		const find = await findBundleMediaService.executeById(bundleMedia.id + 1);

		expect(find).toBe(undefined);
	});
});
