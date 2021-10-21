import ICreateAreaDTO from '../../dtos/ICreateAreaDTO';
import Area from '../../infra/typeorm/entities/Area';
import IAreaRepository from '../IAreaRepository';

class FakeAreaRepository implements IAreaRepository {
	private areas: Area[] = [];

	public async create(data: ICreateAreaDTO): Promise<Area> {
		const checkIfAreaExists = this.areas.find(
			(area) => area.description === data.description
		);

		if (checkIfAreaExists) {
			console.log(checkIfAreaExists);
			throw new Error('Area already exists');
		}

		const area = new Area();

		Object.assign(
			area,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.areas.push(area);
		return area;
	}

	public async findById(id: number): Promise<Area | undefined> {
		const areaFound = this.areas.find((area) => area.id === id);
		return areaFound;
	}

	public async findByDescription(areaname: string): Promise<Area | undefined> {
		const areaFound = this.areas.find((area) => area.description === areaname);
		return areaFound;
	}

	public async save(area: Area): Promise<Area> {
		const findIndex = this.areas.findIndex(
			(findArea) => findArea.id === area.id
		);

		this.areas[findIndex] = area;

		return area;
	}

	public async findAll(): Promise<Area[] | undefined> {
		return this.areas;
	}
}

export default FakeAreaRepository;
