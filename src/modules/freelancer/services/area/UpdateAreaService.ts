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
		const areaFound = await this.areaRepository.findById(area.id);

		if (!areaFound) {
			throw new Error('area not found');
		}

		const areaWithUpdatedDescription = await this.areaRepository.findByName(
			area.description
		);

		if (
			areaWithUpdatedDescription &&
			areaWithUpdatedDescription.id !== area.id
		) {
			throw new Error('Area description already in use');
		}

		areaFound.description = area.description;

		return this.areaRepository.save(areaFound);
	}
}
