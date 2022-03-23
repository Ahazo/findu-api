import { getRepository, Repository, Any } from 'typeorm';

import ICreateBundleDTO from '../../../dtos/ICreateBundleDTO';
import IBundleRepository from '../../../repositories/IBundleRepository';
import Bundle from '../entities/Bundle';

export default class BundleRepository implements IBundleRepository {
	private bundleRepository: Repository<Bundle>;

	constructor() {
		this.bundleRepository = getRepository(Bundle);
	}

	async create(data: ICreateBundleDTO): Promise<Bundle> {
		const bundle = this.bundleRepository.create(data);
		await this.bundleRepository.save(bundle);
		return bundle;
	}

	async save(data: Bundle): Promise<Bundle> {
		return this.bundleRepository.save(data);
	}

	async findById(id: number): Promise<Bundle | undefined> {
		const bundle = await this.bundleRepository.findOne(id);
		return bundle;
	}

	async findAll(): Promise<Bundle[] | undefined> {
		const bundle = await this.bundleRepository.find();
		return bundle;
	}
}
