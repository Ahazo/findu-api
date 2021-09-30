import ICreateProfessionalLevelDTO from '../../../../dtos/ICreateProfessionalLevelDTO';
import IProfessionalLevelRepository from '../../../../repositories/IProfessionalLevelRepository';
import ProfessionalLevel from '../../entities/ProfessionalLevel';

class FakeProfessionalLevelRepository implements IProfessionalLevelRepository {
	private professionalLevels: ProfessionalLevel[] = [];

	public async create(
		professionalLevelsData: ICreateProfessionalLevelDTO
	): Promise<ProfessionalLevel> {
		const professionalLevel = new ProfessionalLevel();

		Object.assign(
			professionalLevel,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
			professionalLevelsData
		);

		this.professionalLevels.push(professionalLevel);
		return professionalLevel;
	}

	public async save(
		professionalLevelData: ProfessionalLevel
	): Promise<ProfessionalLevel> {
		const findIndex = this.professionalLevels.findIndex(
			(professionalLevel) => professionalLevel.id === professionalLevelData.id
		);

		this.professionalLevels[findIndex] = professionalLevelData;

		return this.professionalLevels[findIndex];
	}

	public async findById(id: number): Promise<ProfessionalLevel | undefined> {
		const professionalLevelFound = this.professionalLevels.find(
			(professionalLevel) => professionalLevel.id === id
		);
		return professionalLevelFound;
	}
}

export default FakeProfessionalLevelRepository;
