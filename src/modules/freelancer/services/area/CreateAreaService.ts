import { injectable, inject } from 'tsyringe';

import ICreateAreaDTO from '../../dtos/ICreateAreaDTO';
import Area from '../../infra/typeorm/entities/Area';
import IAreaRepository from '../../repositories/IAreaRepository';

@injectable()
export default class CreateAreaService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async execute(data: ICreateAreaDTO): Promise<Area> {
		const checkIfAreaExists = await this.areaRepository.findByDescription(
			data.description
		);

		if (checkIfAreaExists) throw new Error('Area Already Exists');

		const area = await this.areaRepository.create(data);

		return area;
	}
}
