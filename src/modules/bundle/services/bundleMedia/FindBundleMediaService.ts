import { injectable, inject } from 'tsyringe';

import BundleMedia from '../../infra/typeorm/entities/BundleMedia';
import IBundleMediaRepository from '../../repositories/IBundleMediaRepository';

@injectable()
export default class FindBundleMediaService {
	constructor(
		@inject('BundleMediaRepository')
		private bundleMediaRepository: IBundleMediaRepository
	) {}

	public async executeById(id: number): Promise<BundleMedia | undefined> {
		const bundleMedia = await this.bundleMediaRepository.findById(id);
		return bundleMedia;
	}

	public async executeAll(): Promise<BundleMedia[] | undefined> {
		const bundleMedias = await this.bundleMediaRepository.findAll();
		return bundleMedias;
	}
}
