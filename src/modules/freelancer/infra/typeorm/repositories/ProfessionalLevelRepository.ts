import { getRepository, Repository } from 'typeorm';

import ICreateProfessionalLevelDTO from '../../../dtos/ICreateProfessionalLevelDTO';
import IProfessionalLevelRepository from '../../../repositories/IProfessionalLevelRepository';
import ProfessionalLevel from '../entities/ProfessionalLevel';

class ProfessionalLevelRepository implements IProfessionalLevelRepository {
	private professionalLevelRepository: Repository<ProfessionalLevel>;

	constructor() {
		this.professionalLevelRepository = getRepository(ProfessionalLevel);
	}

	public async create(
		professionalLevelData: ICreateProfessionalLevelDTO
	): Promise<ProfessionalLevel> {
		const professionalLevel = this.professionalLevelRepository.create(
			professionalLevelData
		);

		await this.professionalLevelRepository.save(professionalLevel);
		return professionalLevel;
	}

	public async findById(id: number): Promise<ProfessionalLevel | undefined> {
		const professionalLevel = await this.professionalLevelRepository.findOne(
			id
		);
		return professionalLevel;
	}

	public async findByDescription(
		description: string
	): Promise<ProfessionalLevel | undefined> {
		const professionalLevel = await this.professionalLevelRepository.findOne({
			where: { description },
		});
		return professionalLevel;
	}

	public async findByExperienceNeeded(
		experience_needed: number
	): Promise<ProfessionalLevel | undefined> {
		const professionalLevel = await this.professionalLevelRepository.findOne({
			where: { experience_needed },
		});
		return professionalLevel;
	}

	public async findByLevelNumber(
		level_number: number
	): Promise<ProfessionalLevel | undefined> {
		const professionalLevel = await this.professionalLevelRepository.findOne({
			where: { level_number },
		});
		return professionalLevel;
	}
}

export default ProfessionalLevelRepository;
