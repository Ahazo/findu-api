import { injectable, inject } from 'tsyringe';

import ICreateBundleDTO from '../../dtos/ICreateBundleDTO';
import Bundle from '../../infra/typeorm/entities/Bundle';
import IBundleRepository from '../../repositories/IBundleRepository';

@injectable()
export default class CreateBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async execute(data: ICreateBundleDTO): Promise<Bundle> {
		const checkBundleExists = await this.bundleRepository.findByName(
			data.description
		);

		if (checkBundleExists) throw new Error('This bundle already exists');

		const bundle = await this.bundleRepository.create(data);

		return bundle;
	}
}
