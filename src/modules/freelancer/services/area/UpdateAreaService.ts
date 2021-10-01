import { injectable, inject } from 'tsyringe';

import Area from '../../infra/typeorm/entities/Area';
import IAreaRepository from '../../repositories/IAreaRepository';

@injectable()
export default class UpdateAreaService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async execute(area: Area): Promise<Area> {
		return this.areaRepository.save(area);
	}
}
