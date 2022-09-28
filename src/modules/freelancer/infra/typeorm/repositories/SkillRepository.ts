import { getRepository, Repository } from 'typeorm';

import ICreateSkillsDTO from '../../../dtos/ICreateSkillDTO';
import ISkillRepository from '../../../repositories/ISkillRepository';
import Skill from '../entities/Skill';

export default class SkillRepository implements ISkillRepository {
	private skillRepository: Repository<Skill>;

	constructor() {
		this.skillRepository = getRepository(Skill);
	}

	async create(data: ICreateSkillsDTO): Promise<Skill> {
		const skill = this.skillRepository.create(data);

		await this.skillRepository.save(skill);
		return skill;
	}

	async save(skill: Skill): Promise<Skill> {
		return this.skillRepository.save(skill);
	}

	async findById(id: string): Promise<Skill | undefined> {
		const skill = await this.skillRepository.findOne(id);
		return skill;
	}

	async findAll(): Promise<Skill[] | undefined> {
		const skill = await this.skillRepository.find();
		return skill;
	}

	async findAllByFreelancerId(
		freelancer_id: string
	): Promise<Skill[] | undefined> {
		const skills = await this.skillRepository.find({
			where: freelancer_id.toString(),
		});

		return skills;
	}

	async findAllBySpecializationId(
		specializationId: number
	): Promise<Skill[] | undefined> {
		const skills = await this.skillRepository.find({
			where: specializationId.toString(),
		});

		return skills;
	}

	async findBoundedSkill(
		freelancer_id: string,
		specialization_id: string
	): Promise<Skill | undefined> {
		const skills = await this.skillRepository.findOne({
			where: [
				{
					specialization_id,
					freelancer_id,
				},
			],
		});

		return skills;
	}
}
