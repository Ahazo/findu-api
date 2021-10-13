import ICreateBundleDTO from '../../../dtos/ICreateBundleDTO';
import Bundle from '../../../infra/typeorm/entities/Bundle';
import FakeBundleRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleRepository';
import CreateBundleService from '../CreateBundleService';

describe('CreateBundle', () => {
	let fakeBundleRepository: FakeBundleRepository;

	let createBundleService: CreateBundleService;

	beforeEach(() => {
		fakeBundleRepository = new FakeBundleRepository();

		createBundleService = new CreateBundleService(fakeBundleRepository);
	});

	it('should be able to create bundle', async () => {
		const bundleData: ICreateBundleDTO = {
			title: 'Pacotão',
			description: 'Muitas coisas drento',
			value: 1,
			deadline: new Date(),
		};

		const bundle = await createBundleService.execute(bundleData);

		expect(bundle).toBeInstanceOf(Bundle);
	});
});
