import ICreateBundleDTO from '../../../dtos/bundle/ICreateBundleDTO';
import FakeBundleRepository from '../../../repositories/bundle/fakes/FakeBundleRepository';
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
		const bundle1 = await createBundleService.execute({
			title: 'bundlez',
			description: 'pacote de boracha',
			value: 2,
			deadline: new Date(),
		});

		const updateBundle = await updateBundleService.execute({
			...bundle1,
			id: bundle1.id,
			description: 'bunda',
		});

		expect(updateBundle.description).toBe('bunda');
	});

	it('should not be able to update bundle with a existent description', async () => {
		const bundle = await createBundleService.execute({
			title: 'bundlez',
			description: 'pacote de boracha',
			value: 2,
			deadline: new Date(),
		});

		await expect(
			updateBundleService.execute({
				...bundle,
				id: bundle.id,
				description: 'pacote de boracha',
			})
		).rejects.toBeInstanceOf(Error);
	});
});
