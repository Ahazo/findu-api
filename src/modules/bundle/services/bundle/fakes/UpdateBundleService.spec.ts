import ICreateBundleDTO from '../../../dtos/ICreateBundleDTO';
import FakeBundleRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleRepository';
import CreateBundleService from '../CreateBundleService';
import UpdateBundleService from '../UpdateBundleService';

describe('UpdateBundle', () => {
	let fakeBundleRepository: FakeBundleRepository;

	let createBundleService: CreateBundleService;
	let updateBundleService: UpdateBundleService;

	beforeEach(() => {
		fakeBundleRepository = new FakeBundleRepository();

		createBundleService = new CreateBundleService(fakeBundleRepository);
		updateBundleService = new UpdateBundleService(fakeBundleRepository);
	});

	it('should be able to update bundle', async () => {
		const bundleData1: ICreateBundleDTO = {
			title: 'bundlez',
			description: 'pacote de boracha',
			value: 2,
			deadline: new Date(),
		};

		const bundle1 = await createBundleService.execute(bundleData1);

		const updateBundle = await updateBundleService.execute({
			...bundle1,
			id: bundle1.id,
			description: 'bunda',
		});

		expect(updateBundle.description).toBe('bunda');
	});
});
