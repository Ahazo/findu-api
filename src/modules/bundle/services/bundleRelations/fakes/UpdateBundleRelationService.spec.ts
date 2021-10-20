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
		const bundleRelData: ICreateBundleRelationDTO = {
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		};

		const bundleRel = await createBundleRelationService.execute(bundleRelData);

		const bundleRelData1: ICreateBundleRelationDTO = {
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 10,
		};

		const bundleRel1 = await createBundleRelationService.execute(
			bundleRelData1
		);

		const update = await updateBundleRelationService.execute(bundleRel1);

		expect(update).toBe(bundleRel1);
	});
});
