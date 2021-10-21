import ICreateBundleMediasDTO from 'modules/bundle/dtos/ICreateBundleMediaDTO';

import BundleMedia from '../../infra/typeorm/entities/BundleMedia';
import IBundleMediaRepository from '../IBundleMediaRepository';

export default class FakeBundleMediaRepository
	implements IBundleMediaRepository
{
	private bundles: BundleMedia[] = [];

	public async create(data: ICreateBundleMediasDTO): Promise<BundleMedia> {
		const bundleMedia = new BundleMedia();

		Object.assign(
			bundleMedia,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.bundles.push(bundleMedia);
		return bundleMedia;
	}

	public async save(data: BundleMedia): Promise<BundleMedia> {
		const findIndex = this.bundles.findIndex(
			(findBundle) => findBundle.id === data.id
		);

		this.bundles[findIndex] = data;

		return data;
	}

	public async findById(id: number): Promise<BundleMedia | undefined> {
		const findBundle = this.bundles.find((bundle) => bundle.id === id);
		return findBundle;
	}

	public async findAll(): Promise<BundleMedia[] | undefined> {
		return this.bundles;
	}
}
