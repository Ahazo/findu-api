import { injectable, inject } from 'tsyringe';

import Bundle from '../../infra/typeorm/entities/Bundle';
import IBundleRepository from '../../repositories/IBundleRepository';

@injectable()
export default class FindBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async executeById(id: number): Promise<Bundle | undefined> {
		const result = await this.bundleRepository.findById(id);

		return result;
	}

	public async executeByName(name: string): Promise<Bundle | undefined> {
		const result = await this.bundleRepository.findByName(name);

		return result;
	}

	public async executeAll(): Promise<Bundle[] | undefined> {
		const result = await this.bundleRepository.findAll();

		return result;
	}
}
