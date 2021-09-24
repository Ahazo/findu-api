import { getRepository, Repository } from 'typeorm';

import ICreateInfluencerLevelDTO from '../../../dtos/ICreateInfluencerLevelDTO';
import IInfluencerLevelRepository from '../../../repositories/IInfluencerLevelRepository';
import InfluencerLevel from '../entities/InfluencerLevel';

class InfluencerLevelRepository implements IInfluencerLevelRepository {
	private influencerLevelRepository: Repository<InfluencerLevel>;

	constructor() {
		this.influencerLevelRepository = getRepository(InfluencerLevel);
	}

	public async create(
		influencerLevelData: ICreateInfluencerLevelDTO
	): Promise<InfluencerLevel> {
		const influencerLevel =
			this.influencerLevelRepository.create(influencerLevelData);

		await this.influencerLevelRepository.save(influencerLevel);
		return influencerLevel;
	}

	public async findById(id: number): Promise<InfluencerLevel | undefined> {
		const influencerLevel = await this.influencerLevelRepository.findOne(id);
		return influencerLevel;
	}
}

export default InfluencerLevelRepository;
