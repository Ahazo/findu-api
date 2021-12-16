import { injectable, inject } from 'tsyringe';

import Bundle from '../../infra/typeorm/entities/Bundle';
import IBundleRepository from '../../repositories/IBundleRepository';

@injectable()
export default class UpdateBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async execute(data: Bundle): Promise<Bundle> {
		const bundle = await this.bundleRepository.findById(data.id);

		if (!bundle) throw new Error('Bundle not found');

		const checkDescriptionAlreadyExists =
			await this.bundleRepository.findByName(data.description);

		if (checkDescriptionAlreadyExists)
			throw new Error('This description already exists');

		return this.bundleRepository.save(data);
	}
}
