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

	public async executeAll(): Promise<BundleRelation[] | undefined> {
		const result = await this.bundleRelationsRepository.findAll();

		return result;
	}
}
