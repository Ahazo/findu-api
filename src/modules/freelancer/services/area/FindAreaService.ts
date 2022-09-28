import { injectable, inject } from 'tsyringe';

import Area from '../../infra/typeorm/entities/Area';
import IAreaRepository from '../../repositories/IAreaRepository';

@injectable()
export default class FindAreaService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async executeById(id: string): Promise<Area | undefined> {
		const area = await this.areaRepository.findById(id);

		return area;
	}

	public async executeByDescription(
		description: string
	): Promise<Area | undefined> {
		const area = await this.areaRepository.findByDescription(description);

		return area;
	}

	public async executeAll(): Promise<Area[] | undefined> {
		const area = await this.areaRepository.findAll();

		return area;
	}
}
