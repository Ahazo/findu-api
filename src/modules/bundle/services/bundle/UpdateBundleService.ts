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
		const finder = await this.bundleRepository.findById(data.id);

		if (!finder) throw new Error('Bundle Service ID not found');

		const check = await this.bundleRepository.findByName(data.description);

		if (check) throw new Error('This description already exists');

		return this.bundleRepository.save(data);
	}
}
