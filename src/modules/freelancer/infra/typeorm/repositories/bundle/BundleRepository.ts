import { DeleteResult, getRepository, Repository } from 'typeorm';

import ICreateBundleDTO from '../../../../dtos/bundle/ICreateBundleDTO';
import IBundleRepository from '../../../../repositories/bundle/IBundleRepository';
import Bundle from '../../entities/bundle/Bundle';

class BundleRepository implements IBundleRepository {
	private bundleRepository: Repository<Bundle>;

	constructor() {
		this.bundleRepository = getRepository(Bundle);
	}

	async create(data: ICreateBundleDTO): Promise<Bundle> {
		const bundle = this.bundleRepository.create(data);
		await this.bundleRepository.save(bundle);
		return bundle;
	}

	async findById(id: number): Promise<Bundle | undefined> {
		const bundle = this.bundleRepository.findOne(id);
		return bundle;
	}

	async save(data: Bundle): Promise<Bundle> {
		return this.bundleRepository.save(data);
	}

	async delete(id: number): Promise<DeleteResult> {
		return this.bundleRepository.delete(id);
	}
}

export default BundleRepository;
