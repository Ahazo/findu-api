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
		console.info('AREAAAAAAAAAAA', data);
		const area = await this.areaRepository.create(data);

		console.log('AREAAAAAAAAAAA', area);
		return area;
	}
}
