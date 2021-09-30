import ICreateAreaDTO from 'modules/freelancer/dtos/ICreateAreaDTO';
import { getRepository, Repository } from 'typeorm';

import IAreaRepository from '../../../repositories/IAreaRepository';
import Area from '../entities/Area';

export default class AreaRepository implements IAreaRepository {
	private areaRespository: Repository<Area>;

	constructor() {
		this.areaRespository = getRepository(Area);
	}

	async create(data: ICreateAreaDTO): Promise<Area> {
		const area = this.areaRespository.create(data);

		await this.areaRespository.save(area);
		return area;
	}

	async save(area: Area): Promise<Area> {
		return this.areaRespository.save(area);
	}

	async findById(id: number): Promise<Area | undefined> {
		const area = await this.areaRespository.findOne(id);
		return area;
	}

	async findByName(areaName: string): Promise<Area | undefined> {
		const area = await this.areaRespository.findOne({
			where: areaName,
		});

		return area;
	}
}
