import { injectable, inject } from 'tsyringe';

import ICreateInfluencerLevelDTO from '../../dtos/ICreateInfluencerLevelDTO';
import InfluencerLevel from '../../infra/typeorm/entities/InfluencerLevel';
import IInfluencerLevelRepository from '../../repositories/IInfluencerLevelRepository';

@injectable()
export default class CreateInfluencerLevelService {
	constructor(
		@inject('InfluencerLevelRepository')
		private influencerLevelRepository: IInfluencerLevelRepository // eslint-disable-next-line @typescript-eslint/no-empty-function
	) {}

	public async execute(
		data: ICreateInfluencerLevelDTO
	): Promise<InfluencerLevel> {
		const result = await this.influencerLevelRepository.create(data);

		return result;
	}
}
