import { injectable, inject } from 'tsyringe';

import BundleRelation from '../../infra/typeorm/entities/BundleRelation';
import IBundleRelationRepository from '../../repositories/IBundleRelationRepository';

@injectable()
export default class UpdateBundleRelationsService {
	constructor(
		@inject('BundleRelationsRepository')
		private bundleRelationsRepository: IBundleRelationRepository
	) {}

	public async execute(data: BundleRelation): Promise<BundleRelation> {
		return this.bundleRelationsRepository.save(data);
	}
}
