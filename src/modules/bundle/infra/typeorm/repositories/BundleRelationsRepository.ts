import ICreateBundleRelationDTO from 'modules/bundle/dtos/ICreateBundleRelationDTO';
import { getRepository, Repository } from 'typeorm';

import IBundleRelationRepository from '../../../repositories/IBundleRelationRepository';
import BundleRelation from '../entities/BundleRelation';

export default class BundleRelationRepository
	implements IBundleRelationRepository
{
	private bundleRelationRepository: Repository<BundleRelation>;

	constructor() {
		this.bundleRelationRepository = getRepository(BundleRelation);
	}

	async create(data: ICreateBundleRelationDTO): Promise<BundleRelation> {
		const bundle = this.bundleRelationRepository.create(data);
		await this.bundleRelationRepository.save(bundle);

		return bundle;
	}

	async save(data: BundleRelation): Promise<BundleRelation> {
		return this.bundleRelationRepository.save(data);
	}

	async findById(id: number): Promise<BundleRelation | undefined> {
		const bundle = await this.bundleRelationRepository.findOne(id);

		return bundle;
	}

	async findByName(name: string): Promise<BundleRelation | undefined> {
		const bundle = await this.bundleRelationRepository.findOne({ where: name });

		return bundle;
	}

	async findAll(): Promise<BundleRelation[] | undefined> {
		const bundle = await this.bundleRelationRepository.find();

		return bundle;
	}
}
