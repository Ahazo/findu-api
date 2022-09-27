import Bundle from '../../../infra/typeorm/entities/bundle/Bundle';
import FakeBundleRepository from '../../../repositories/bundle/fakes/FakeBundleRepository';
import CreateBundleService from '../CreateBundleService';

describe('CreateBundle', () => {
	let fakeBundleRepository: FakeBundleRepository;

	let createBundleService: CreateBundleService;

	beforeEach(() => {
		fakeBundleRepository = new FakeBundleRepository();

		createBundleService = new CreateBundleService(fakeBundleRepository);
	});

	it('should be able to create bundle', async () => {
		expect(
			await createBundleService.execute({
				title: 'Pacotão',
				description: 'Muitas coisas drento',
				value: 1,
				deadline: 2,
				bundleRelation: [
					{
						freelancer_id: 1,
						percentage: 100,
					},
				],
			})
		).toBeInstanceOf(Bundle);
	});

	it('should not be able to create bundles with the same name', async () => {
		const bundle = await createBundleService.execute({
			title: 'Pacotão',
			description: 'Muitas coisas drento',
			value: 1,
			deadline: 2,
			bundleRelation: [
				{
					freelancer_id: 1,
					percentage: 100,
				},
			],
		});

		await expect(
			createBundleService.execute({ ...bundle, title: 'Pacotão' })
		).rejects.toBeInstanceOf(Error);
	});
});
