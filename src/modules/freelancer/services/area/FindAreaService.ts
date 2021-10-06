import { injectable, inject } from 'tsyringe';

import Area from '../../infra/typeorm/entities/Area';
import IAreaRepository from '../../repositories/IAreaRepository';

@injectable()
export default class FindAreaService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async executeById(id: number): Promise<Area | undefined> {
		const result = await this.areaRepository.findById(id);

		return result;
	}

	public async executeByName(name: string): Promise<Area | undefined> {
		const result = await this.areaRepository.findByName(name);

		return result;
	}

	public async executeAll(): Promise<Area[] | undefined> {
		const result = await this.areaRepository.findAll();

		return result;
	}
}
