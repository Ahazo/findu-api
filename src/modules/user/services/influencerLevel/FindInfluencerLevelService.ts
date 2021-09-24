import InfluencerLevel from 'modules/user/infra/typeorm/entities/InfluencerLevel';
import IInfluencerLevelRepository from 'modules/user/repositories/IInfluencerLevelRepository';
import { injectable, inject } from 'tsyringe';

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
}
