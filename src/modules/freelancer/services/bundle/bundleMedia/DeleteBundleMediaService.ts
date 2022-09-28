import { inject } from 'tsyringe';
import { DeleteResult } from 'typeorm';

import IBundleMediaRepository from '../../../repositories/bundle/IBundleMediaRepository';

export default class DeleteBundleMediaService {
	constructor(
		@inject('BundleMediaRepository')
		private bundleMediaRepository: IBundleMediaRepository
	) {}

	async execute(id: string): Promise<void> {
		const bundleMedia = this.bundleMediaRepository.findById(id);

		if (!bundleMedia) {
			throw new Error('Bundle media not found.');
		}

		await this.bundleMediaRepository.delete(id);
	}
}
