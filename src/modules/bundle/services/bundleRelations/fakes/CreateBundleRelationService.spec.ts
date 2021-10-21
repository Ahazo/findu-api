import ICreateBundleRelationDTO from '../../../dtos/ICreateBundleRelationDTO';
import BundleRelation from '../../../infra/typeorm/entities/BundleRelation';
import FakeBundleRelationsRepository from '../../../repositories/fakes/FakeBundleRelationsRepository';
import CreateBundleRelationsService from '../CreateBundleRelationsService';

describe('BundleRelation Create', () => {
	let fakeBundleRelationRepository: FakeBundleRelationsRepository;

	let createBundleRelationService: CreateBundleRelationsService;

	beforeEach(() => {
		fakeBundleRelationRepository = new FakeBundleRelationsRepository();

		createBundleRelationService = new CreateBundleRelationsService(
			fakeBundleRelationRepository
		);
	});

	it('should be able to create Bundle Repositories', async () => {
		const bundleRelationData: ICreateBundleRelationDTO = {
			bundle_id: 1,
			freelancer_id: 1,
			percentage: 1,
		};

		const bundleRelation = await createBundleRelationService.execute(
			bundleRelationData
		);

		expect(bundleRelation).toBeInstanceOf(BundleRelation);
	});
});
