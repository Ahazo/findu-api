import ICreateInfluencerLevelDTO from 'modules/user/dtos/ICreateInfluencerLevelDTO';
import InfluencerLevel from 'modules/user/infra/typeorm/entities/InfluencerLevel';
import IInfluencerLevelRepository from 'modules/user/repositories/IInfluencerLevelRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateInfluencerLevelService {
	constructor(
		@inject('InfluencerLevelRepository')
		private influencerLevelRepository: IInfluencerLevelRepository
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	) {}

	public async execute(
		data: ICreateInfluencerLevelDTO
	): Promise<InfluencerLevel> {
		const result = await this.influencerLevelRepository.create(data)

		return result;
	}
}
