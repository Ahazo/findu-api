import ICreateBundleMediasDTO from 'modules/bundle/dtos/ICreateBundleMediaDTO';
import BundleMedia from 'modules/bundle/infra/typeorm/entities/BundleMedia';
import { injectable, inject } from 'tsyringe';

import IBundleMediaRepository from '../../repositories/IBundleMediaRepository';

@injectable()
export default class CreateBundleMediaService {
	constructor(
		@inject('BundleMediaRepository')
		private bundleMediaRepository: IBundleMediaRepository
	) {}

	public async execute(data: ICreateBundleMediasDTO): Promise<BundleMedia> {
		const result = await this.bundleMediaRepository.create(data);

		console.log('From Service', result);

		return result;
	}
}
