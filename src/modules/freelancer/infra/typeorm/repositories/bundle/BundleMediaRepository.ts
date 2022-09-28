import { DeleteResult, getRepository, Repository } from 'typeorm';

import ICreateBundleMediaDTO from '../../../../dtos/bundle/ICreateBundleMediaDTO';
import IBundleMediaRepository from '../../../../repositories/bundle/IBundleMediaRepository';
import BundleMedia from '../../entities/bundle/BundleMedia';

class BundleMediaRepository implements IBundleMediaRepository {
	private bundleMediaRepository: Repository<BundleMedia>;

	constructor() {
		this.bundleMediaRepository = getRepository(BundleMedia);
	}

	async create(data: ICreateBundleMediaDTO): Promise<BundleMedia> {
		const bundleMedia = this.bundleMediaRepository.create(data);
		await this.bundleMediaRepository.save(bundleMedia);
		return bundleMedia;
	}

	async delete(id: string): Promise<DeleteResult> {
		return this.bundleMediaRepository.delete(id);
	}

	async findById(id: string): Promise<BundleMedia | undefined> {
		return this.bundleMediaRepository.findOne(id);
	}
}

export default BundleMediaRepository;
