import { injectable, inject } from 'tsyringe';

import BundleMedia from '../../infra/typeorm/entities/BundleMedia';
import IBundleMediaRepository from '../../repositories/IBundleMediaRepository';

@injectable()
export default class UpdateBundleMediaService {
	constructor(
		@inject('BundleMediaRepository')
		private bundleMediaRepository: IBundleMediaRepository
	) {}

	public async execute(data: BundleMedia): Promise<BundleMedia> {
		const bundleMediaFound = this.bundleMediaRepository.findById(data.id);

		if (!bundleMediaFound) throw new Error('Bundle media not found');

		return this.bundleMediaRepository.save(data);
	}
}
