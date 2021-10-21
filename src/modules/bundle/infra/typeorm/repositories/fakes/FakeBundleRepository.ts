import ICreateBundleDTO from '../../../../dtos/ICreateBundleDTO';
import IBundleRepository from '../../../../repositories/IBundleRepository';
import Bundle from '../../entities/Bundle';

export default class FakeBundleRepository implements IBundleRepository {
	private bundles: Bundle[] = [];

	public async create(data: ICreateBundleDTO): Promise<Bundle> {
		const bundle = new Bundle();

		Object.assign(
			bundle,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.bundles.push(bundle);
		return bundle;
	}

	public async save(bundle: Bundle): Promise<Bundle> {
		const findIndex = this.bundles.findIndex(
			(findBundle) => findBundle.id === bundle.id
		);

		this.bundles[findIndex] = bundle;
		return bundle;
	}

	public async findById(id: number): Promise<Bundle | undefined> {
		const bundleFound = this.bundles.find((bundle) => bundle.id === id);
		return bundleFound;
	}

	public async findByName(name: string): Promise<Bundle | undefined> {
		const bundleFound = this.bundles.find(
			(bundle) => bundle.description === name
		);
		return bundleFound;
	}

	public async findAll(): Promise<Bundle[] | undefined> {
		return this.bundles;
	}
}
