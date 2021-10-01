import ICreateAreaDTO from '../../../../dtos/ICreateAreaDTO';
import IAreaRepository from '../../../../repositories/IAreaRepository';
import Area from '../../entities/Area';

class FakeAreaRepository implements IAreaRepository {
	private areas: Area[] = [];

	public async create(data: ICreateAreaDTO): Promise<Area> {
		const area = new Area();

		Object.assign(area, { id: Math.floor(Math.random() * (10 - 1) + 1) }, data);

		this.areas.push(area);
		return area;
	}

	public async findById(id: number): Promise<Area | undefined> {
		const areaFound = this.areas.find((area) => area.id === id);
		return areaFound;
	}

	public async findByName(areaname: string): Promise<Area | undefined> {
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
}

export default FakeAreaRepository;
