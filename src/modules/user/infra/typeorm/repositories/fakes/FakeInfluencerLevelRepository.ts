import ICreateInfluencerLevelDTO from '../../../../dtos/ICreateInfluencerLevelDTO';
import IInfluencerLevelRepository from '../../../../repositories/IInfluencerLevelRepository';
import InfluencerLevel from '../../entities/InfluencerLevel';

class FakeInfluencerLevelRepository implements IInfluencerLevelRepository {
	private levels: InfluencerLevel[] = [];

	public async create(
		levelData: ICreateInfluencerLevelDTO
	): Promise<InfluencerLevel> {
		const influencerLevel = new InfluencerLevel();

		Object.assign(
			influencerLevel,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			levelData
		);

		this.levels.push(influencerLevel);

		console.log(influencerLevel, this.levels);
		return influencerLevel;
	}

	public async findById(id: number): Promise<InfluencerLevel | undefined> {
		const influencerLevelFound = this.levels.find((level) => level.id === id);
		return influencerLevelFound;
	}
}

export default FakeInfluencerLevelRepository;
