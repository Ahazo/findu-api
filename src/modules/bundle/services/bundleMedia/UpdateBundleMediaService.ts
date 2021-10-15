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
		const result = await this.bundleMediaRepository.save(data);

		return result;
	}
}
