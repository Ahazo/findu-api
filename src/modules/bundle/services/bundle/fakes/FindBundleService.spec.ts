import ICreateBundleDTO from '../../../dtos/ICreateBundleDTO';
import FakeBundleRepository from '../../../repositories/fakes/FakeBundleRepository';
import CreateBundleService from '../CreateBundleService';
import FindBundleService from '../FindBundleService';

describe('FindBundle', () => {
	let fakeBundleRepository: FakeBundleRepository;

	let createBundleService: CreateBundleService;
	let findBundleService: FindBundleService;

	beforeEach(() => {
		fakeBundleRepository = new FakeBundleRepository();

		createBundleService = new CreateBundleService(fakeBundleRepository);
		findBundleService = new FindBundleService(fakeBundleRepository);
	});

	it('should be able to find bundle by its ID', async () => {
		const bundleData: ICreateBundleDTO = {
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		};

		const bundle = await createBundleService.execute(bundleData);

		const find = await findBundleService.executeById(bundle.id);

		expect(find).toBe(bundle);
	});

	it('should not be able to find bundle by its wrong ID', async () => {
		const bundleData: ICreateBundleDTO = {
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		};

		const bundle = await createBundleService.execute(bundleData);

		const find = await findBundleService.executeById(bundle.id + 1);

		expect(find).toBe(undefined);
	});

	it('should be able to find bundle by its name', async () => {
		const bundleData: ICreateBundleDTO = {
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		};

		const bundle = await createBundleService.execute(bundleData);

		const find = await findBundleService.executeByName(bundle.description);

		expect(find).toBe(bundle);
	});

	it('should not be able to find bundle by wrong its name', async () => {
		const bundleData: ICreateBundleDTO = {
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		};

		const bundle = await createBundleService.execute(bundleData);

		const find = await findBundleService.executeByName(
			'batatinha quando naisce'
		);

		expect(find).toBe(undefined);
	});
});
