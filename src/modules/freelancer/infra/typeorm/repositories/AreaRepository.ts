import ICreateAreaDTO from 'modules/freelancer/dtos/ICreateAreaDTO';
import { getRepository, Repository } from 'typeorm';

import IAreaRepository from '../../../repositories/IAreaRepository';
import Area from '../entities/Area';

export default class AreaRepository implements IAreaRepository {
	private areaRepository: Repository<Area>;

	constructor() {
		this.areaRepository = getRepository(Area);
	}

	async create(data: ICreateAreaDTO): Promise<Area> {
		const area = this.areaRepository.create(data);

		await this.areaRepository.save(area);
		return area;
	}

	async save(area: Area): Promise<Area> {
		return this.areaRepository.save(area);
	}

	async findById(id: number): Promise<Area | undefined> {
		const area = await this.areaRepository.findOne(id);
		return area;
	}

	async findByDescription(description: string): Promise<Area | undefined> {
		const area = await this.areaRepository.findOne({
			where: description,
		});

		return area;
	}

	async findAll(): Promise<Area[] | undefined> {
		const area = await this.areaRepository.find();

		return area;
	}
}
