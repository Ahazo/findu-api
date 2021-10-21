import ICreateBundleRelationDTO from '../../../dtos/ICreateBundleRelationDTO';
import FakeBundleRelationsRepository from '../../../infra/typeorm/repositories/fakes/FakeBundleRelationsRepository';
import CreateBundleRelationsService from '../CreateBundleRelationsService';
import UpdateBundleRelationsService from '../UpdateBundleRelationsService';

describe('UpdateBundleRelation', () => {
	let fakeBundleRelationRepository: FakeBundleRelationsRepository;

	let createBundleRelationService: CreateBundleRelationsService;
	let updateBundleRelationService: UpdateBundleRelationsService;

	beforeEach(() => {
		fakeBundleRelationRepository = new FakeBundleRelationsRepository();

		createBundleRelationService = new CreateBundleRelationsService(
			fakeBundleRelationRepository
		);

		updateBundleRelationService = new UpdateBundleRelationsService(
			fakeBundleRelationRepository
		);
	});

	it('should be able to update bundle relation', async () => {
		const bundleRel = await createBundleRelationService.execute({
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		});

		const update = await updateBundleRelationService.execute({
			...bundleRel,
			id: bundleRel.id,
			percentage: 20,
		});

		expect(update.percentage).toBe(20);
	});
});
