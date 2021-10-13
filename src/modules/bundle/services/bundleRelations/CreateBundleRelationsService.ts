import { injectable, inject } from 'tsyringe';

import ICreateBundleRelationDTO from '../../dtos/ICreateBundleRelationDTO';
import BundleRelation from '../../infra/typeorm/entities/BundleRelation';
import IBundleRelationRepository from '../../repositories/IBundleRelationRepository';

@injectable()
export default class CreateBundleRelationsService {
	constructor(
		@inject('BundleRelationsRepository')
		private bundleRelationsRepository: IBundleRelationRepository
	) {}

	public async execute(
		data: ICreateBundleRelationDTO
	): Promise<BundleRelation> {
		const result = await this.bundleRelationsRepository.create(data);

		return result;
	}
}
