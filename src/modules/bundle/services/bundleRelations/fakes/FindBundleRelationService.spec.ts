import ICreateBundleRelationDTO from '../../../dtos/ICreateBundleRelationDTO';
import FakeBundleRelationsRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleRelationsRepository';
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
		const bundleRel = await createBundleRelationService.execute({
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		});

		expect(await findBundleRelationService.executeById(bundleRel.id)).toBe(
			bundleRel
		);
	});

	it('should not be able to find bundle relation by its wrong ID', async () => {
		const bundleRel = await createBundleRelationService.execute({
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		});

		expect(await findBundleRelationService.executeById(bundleRel.id + 1)).toBe(
			undefined
		);
	});
});
