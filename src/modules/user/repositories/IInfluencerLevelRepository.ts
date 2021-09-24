import ICreateInfluencerLevelDTO from '../dtos/ICreateInfluencerLevelDTO';
import InfluencerLevel from '../infra/typeorm/entities/InfluencerLevel';

export default interface IInfluencerLevelRepository {
	create(data: ICreateInfluencerLevelDTO): Promise<InfluencerLevel>;
	findById(id: number): Promise<InfluencerLevel | undefined>;
}
