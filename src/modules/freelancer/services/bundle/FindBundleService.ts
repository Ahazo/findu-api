import { injectable, inject } from 'tsyringe';

import Bundle from '../../infra/typeorm/entities/bundle/Bundle';
import IBundleRepository from '../../repositories/bundle/IBundleRepository';

@injectable()
export default class FindBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async executeById(id: string): Promise<Bundle | undefined> {
		const bundle = await this.bundleRepository.findById(id);
		return bundle;
	}
}
