import { injectable, inject } from 'tsyringe';

import ICreateBundleMediasDTO from '../../dtos/ICreateBundleMediaDTO';
import BundleMedia from '../../infra/typeorm/entities/BundleMedia';
import IBundleMediaRepository from '../../repositories/IBundleMediaRepository';

@injectable()
export default class CreateBundleMediaService {
	constructor(
		@inject('BundleMediaRepository')
		private bundleMediaRepository: IBundleMediaRepository
	) {}

	public async execute(data: ICreateBundleMediasDTO): Promise<BundleMedia> {
		const bundleMedia = await this.bundleMediaRepository.create(data);
		return bundleMedia;
	}
}
