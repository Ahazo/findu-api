import ICreateSkillsDTO from 'modules/freelancer/dtos/ICreateSkillDTO';
import ISkillRepository from 'modules/freelancer/repositories/ISkillRepository';
import { getRepository, Repository } from 'typeorm';

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

	async findById(id: number): Promise<Skill | undefined> {
		const skill = await this.skillRepository.findOne(id);
		return skill;
	}

	async findByFreelancerId(freelancerId: number): Promise<Skill[] | undefined> {
		const skill = await this.skillRepository.find({
			where: freelancerId.toString(),
		});

		return skill;
	}

	async findAll(): Promise<Skill[] | undefined> {
		const skill = await this.skillRepository.find();
		return skill;
	}
}
