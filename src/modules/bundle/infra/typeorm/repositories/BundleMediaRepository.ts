import { getRepository, Repository, Any } from 'typeorm';

import ICreateBundleMediasDTO from '../../../dtos/ICreateBundleMediaDTO';
import IBundleMediaRepository from '../../../repositories/IBundleMediaRepository';
import BundleMedia from '../entities/BundleMedia';

export default class BundleMediaRepository implements IBundleMediaRepository {
	private bundleMediaRepository: Repository<BundleMedia>;

	constructor() {
		this.bundleMediaRepository = getRepository(BundleMedia);
	}

	async create(data: ICreateBundleMediasDTO): Promise<BundleMedia> {
		const bundle = this.bundleMediaRepository.create(data);

		await this.bundleMediaRepository.save(bundle);

		return bundle;
	}

	async save(data: BundleMedia): Promise<BundleMedia> {
		return this.bundleMediaRepository.save(data);
	}

	async findById(id: number): Promise<BundleMedia | undefined> {
		const bundle = await this.bundleMediaRepository.findOne(id);

		return bundle;
	}

	async findByName(name: string): Promise<BundleMedia | undefined> {
		const bundle = await this.bundleMediaRepository.findOne({ where: name });

		return bundle;
	}

	async findAll(): Promise<BundleMedia[] | undefined> {
		const bundle = await this.bundleMediaRepository.find();

		return bundle;
	}
}
