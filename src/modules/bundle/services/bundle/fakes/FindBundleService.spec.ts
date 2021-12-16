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
		const bundle = await createBundleService.execute({
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		});

		expect(await findBundleService.executeById(bundle.id)).toBe(bundle);
	});

	it('should not be able to find bundle by its wrong ID', async () => {
		const bundle = await createBundleService.execute({
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		});

		expect(await findBundleService.executeById(bundle.id + 1)).toBeUndefined();
	});

	it('should be able to find bundle by its name', async () => {
		const bundle = await createBundleService.execute({
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		});

		expect(await findBundleService.executeByName(bundle.description)).toBe(
			bundle
		);
	});

	it('should not be able to find bundle by wrong its name', async () => {
		const bundle = await createBundleService.execute({
			title: 'bundlezada',
			description: 'pacote de sargadinho',
			value: 3,
			deadline: new Date(),
		});

		expect(
			await findBundleService.executeByName('batatinha quando naisce')
		).toBeUndefined();
	});
});
