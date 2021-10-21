import ICreateBundleRelationDTO from '../../../dtos/ICreateBundleRelationDTO';
import FakeBundleRelationsRepository from '../../../repositories/fakes/FakeBundleRelationsRepository';
import CreateBundleRelationsService from '../CreateBundleRelationsService';
import FindBundleRelationsService from '../FindBundleRelationsService';

describe('FindBundleRelation', () => {
	let fakeBundleRelationRepository: FakeBundleRelationsRepository;

	let createBundleRelationService: CreateBundleRelationsService;
	let findBundleRelationService: FindBundleRelationsService;

	beforeEach(() => {
		fakeBundleRelationRepository = new FakeBundleRelationsRepository();

		createBundleRelationService = new CreateBundleRelationsService(
			fakeBundleRelationRepository
		);

		findBundleRelationService = new FindBundleRelationsService(
			fakeBundleRelationRepository
		);
	});

	it('should be able to find bundle relation by its ID', async () => {
		const bundleRelData: ICreateBundleRelationDTO = {
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		};

		const bundleRel = await createBundleRelationService.execute(bundleRelData);

		const find = await findBundleRelationService.executeById(bundleRel.id);

		expect(find).toBe(bundleRel);
	});

	it('should not be able to find bundle relation by its wrong ID', async () => {
		const bundleRelData: ICreateBundleRelationDTO = {
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		};

		const bundleRel = await createBundleRelationService.execute(bundleRelData);

		const find = await findBundleRelationService.executeById(bundleRel.id + 1);

		expect(find).toBe(undefined);
	});
});
