import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
import BundleMedia from '../../../infra/typeorm/entities/BundleMedia';
import FakeBundleMediaRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleMediaRepository';
import CreateBundleMediaService from '../CreateBundleMediaService';

describe('CreateBundle Media', () => {
	let fakeBundleMediaRepository: FakeBundleMediaRepository;

	let createBundleMediaService: CreateBundleMediaService;

	beforeEach(() => {
		fakeBundleMediaRepository = new FakeBundleMediaRepository();

		createBundleMediaService = new CreateBundleMediaService(
			fakeBundleMediaRepository
		);
	});

	it('should be able to create bundle medias', async () => {
		const bundleMediaData: ICreateBundleMediasDTO = {
			bundle: {
				title: 'Pacotão',
				description: 'Muitas coisas drento',
				value: 1,
				deadline: new Date(),
			},
			url: 'sites.com',
		};

		const bundleMedia = await createBundleMediaService.execute(bundleMediaData);

		expect(bundleMedia).toBeInstanceOf(BundleMedia);
	});
});
