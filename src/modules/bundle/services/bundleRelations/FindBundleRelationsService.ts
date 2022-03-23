import { injectable, inject } from 'tsyringe';

import BundleRelation from '../../infra/typeorm/entities/BundleRelation';
import IBundleRelationRepository from '../../repositories/IBundleRelationRepository';

@injectable()
export default class FindBundleRelationsService {
	constructor(
		@inject('BundleRelationsRepository')
		private bundleRelationsRepository: IBundleRelationRepository
	) {}

	public async executeById(id: number): Promise<BundleRelation | undefined> {
		const result = await this.bundleRelationsRepository.findById(id);

		return result;
	}

	public async executeByFreelancerId(
		freelancer_id: number
	): Promise<BundleRelation[] | undefined> {
		const bundles = await this.bundleRelationsRepository.findAllByFreelancer(
			freelancer_id
		);
		return bundles;
	}
}
