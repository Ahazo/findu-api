import { injectable, inject } from 'tsyringe';

import Bundle from '../../infra/typeorm/entities/bundle/Bundle';
import IBundleRepository from '../../repositories/bundle/IBundleRepository';

@injectable()
export default class UpdateBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async execute(data: Bundle): Promise<Bundle> {
		const bundle = await this.bundleRepository.findById(data.id);
		if (!bundle) throw new Error('Bundle not found');

		return this.bundleRepository.save(data);
	}
}
