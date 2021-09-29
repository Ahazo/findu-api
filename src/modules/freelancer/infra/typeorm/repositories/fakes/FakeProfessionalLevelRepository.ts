import ICreateProfessionalLevelDTO from '../../../../dtos/ICreateProfessionalLevelDTO';
import IProfessionalLevelRepository from '../../../../repositories/IProfessionalLevelRepository';
import ProfessionalLevel from '../../entities/ProfessionalLevel';

class FakeProfessionalLevelRepository implements IProfessionalLevelRepository {
	private levels: ProfessionalLevel[] = [];

	public async create(
		levelData: ICreateProfessionalLevelDTO
	): Promise<ProfessionalLevel> {
		const professionalLevel = new ProfessionalLevel();

		Object.assign(
			professionalLevel,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			levelData
		);

		this.levels.push(professionalLevel);
		return professionalLevel;
	}

	public async save(freelancer: Freelancer): Promise<Freelancer> {
		const findIndex = this.users.findIndex(
			(findUser) => findUser.id === user.id
		);

		this.users[findIndex] = user;

		return user;
	}
}

	public async findById(id: number): Promise<ProfessionalLevel | undefined> {
		const professionalLevelFound = this.levels.find((level) => level.id === id);
		return professionalLevelFound;
	}
}

export default FakeProfessionalLevelRepository;
