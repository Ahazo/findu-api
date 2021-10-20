import Bundle from 'modules/bundle/infra/typeorm/entities/Bundle';
import { injectable, inject } from 'tsyringe';

import IBundleRepository from '../../repositories/IBundleRepository';

@injectable()
export default class UpdateBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async execute(data: Bundle): Promise<Bundle> {
		return this.bundleRepository.save(data);
	}
}
