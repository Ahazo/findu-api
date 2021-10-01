import { injectable, inject } from 'tsyringe';

import Area from '../infra/typeorm/entities/Area';
import IAreaRepository from '../repositories/IAreaRepository';

interface IRequestDTO {
	areaId: number;

	description?: string;
}

@injectable()
export default class UpdateAreaService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async execute({
		areaId: number,
		description: string,
	}: IRequestDTO): Promise<Area> {
		const area = await this.areaRepository.findById(areaId);

		return this.areaRepository.save(area);
	}
}
