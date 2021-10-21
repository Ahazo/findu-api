import ICreateBundleRelationDTO from '../../../../dtos/ICreateBundleRelationDTO';
import IBundleRelationRepository from '../../../../repositories/IBundleRelationRepository';
import BundleRelation from '../../entities/BundleRelation';

export default class FakeBundleRelationsRepository
	implements IBundleRelationRepository
{
	private bundles: BundleRelation[] = [];

	public async create(data: ICreateBundleRelationDTO): Promise<BundleRelation> {
		const bundleRelation = new BundleRelation();

		Object.assign(
			bundleRelation,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.bundles.push(bundleRelation);

		return bundleRelation;
	}

	public async save(data: BundleRelation): Promise<BundleRelation> {
		const findIndex = this.bundles.findIndex(
			(findBundle) => findBundle.id === data.id
		);

		this.bundles[findIndex] = data;

		return data;
	}

	public async findById(id: number): Promise<BundleRelation | undefined> {
		const findBundle = this.bundles.find((bundle) => bundle.id === id);
		return findBundle;
	}

	public async findAll(): Promise<BundleRelation[] | undefined> {
		return this.bundles;
	}
}
