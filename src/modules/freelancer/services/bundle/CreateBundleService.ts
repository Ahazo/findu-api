import { injectable, inject } from 'tsyringe';

import ICreateBundleDTO from '../../dtos/bundle/ICreateBundleDTO';
import Bundle from '../../infra/typeorm/entities/bundle/Bundle';
import IBundleRepository from '../../repositories/bundle/IBundleRepository';

@injectable()
export default class CreateBundleService {
	constructor(
		@inject('BundleRepository')
		private bundleRepository: IBundleRepository
	) {}

	public async execute(data: ICreateBundleDTO): Promise<Bundle> {
		const bundle = await this.bundleRepository.create(data);
		return bundle;
	}
}
