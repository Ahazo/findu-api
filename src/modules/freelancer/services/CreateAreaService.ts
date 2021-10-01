import { injectable, inject } from 'tsyringe';

import ICreateAreaDTO from '../dtos/ICreateAreaDTO';
import Area from '../infra/typeorm/entities/Area';
import IAreaRepository from '../repositories/IAreaRepository';

@injectable()
export default class CreateFreelancerService {
	constructor(
		@inject('AreaRepository')
		private areaRepository: IAreaRepository
	) {}

	public async execute(data: ICreateAreaDTO): Promise<Area> {
		const result = await this.areaRepository.create(data);

		return result;
	}
}
