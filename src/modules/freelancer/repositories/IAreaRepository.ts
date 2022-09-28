import ICreateAreaDTO from '../dtos/ICreateAreaDTO';
import Area from '../infra/typeorm/entities/Area';

export default interface IAreaRepository {
	create(data: ICreateAreaDTO): Promise<Area>;
	save(area: Area): Promise<Area>;
	findById(id: string): Promise<Area | undefined>;
	findByDescription(areaName: string): Promise<Area | undefined>;
	findAll(): Promise<Area[] | undefined>;
}
