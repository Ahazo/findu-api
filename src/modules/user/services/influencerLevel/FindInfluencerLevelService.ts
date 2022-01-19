import { injectable, inject } from 'tsyringe';

import InfluencerLevel from '../../infra/typeorm/entities/InfluencerLevel';
import IInfluencerLevelRepository from '../../repositories/IInfluencerLevelRepository';

@injectable()
export default class FindInfluencerLevel {
	constructor(
		@inject('InfluencerLevelRepository')
		private influencerLevelRepository: IInfluencerLevelRepository
	) {}

	public async executeById(id: number): Promise<InfluencerLevel | undefined> {
		const influencerLevel = await this.influencerLevelRepository.findById(id);
		return influencerLevel;
	}

	public async executeByLevelNumber(
		level_number: number
	): Promise<InfluencerLevel | undefined> {
		const influencerLevel = await this.influencerLevelRepository.findByNumber(
			level_number
		);
		return influencerLevel;
	}
}
