import ICreateSkillDTO from '../../dtos/ICreateSkillDTO';
import Skill from '../../infra/typeorm/entities/Skill';
import ISkillRepository from '../ISkillRepository';

class FakeSkillRepository implements ISkillRepository {
	private skills: Skill[] = [];

	public async create(data: ICreateSkillDTO): Promise<Skill> {
		const skill = new Skill();

		Object.assign(
			skill,
			{ id: Math.floor(Math.random() * (100 - 1) + 1) },
			data
		);

		this.skills.push(skill);
		return skill;
	}

	public async save(skill: Skill): Promise<Skill> {
		const findIndex = this.skills.findIndex(
			(findSkill) => findSkill.id === skill.id
		);

		this.skills[findIndex] = skill;

		return skill;
	}

	public async findById(id: number): Promise<Skill | undefined> {
		const skillFound = this.skills.find((skill) => skill.id === id);

		return skillFound;
	}

	public async findAllByFreelancerId(
		freelancer_id: number
	): Promise<Skill[] | undefined> {
		const freelancerSkills = this.skills.filter(
			(skill) => skill.id === freelancer_id
		);

		return freelancerSkills;
	}

	public async findAllBySpecializationId(
		specialization_id: number
	): Promise<Skill[] | undefined> {
		const specializationSkills = this.skills.filter(
			(skill) => skill.id === specialization_id
		);

		return specializationSkills;
	}

	public async findBoundedSkill(
		freelancer_id: number,
		specialization_id: number
	): Promise<Skill | undefined> {
		const boundedSkill = this.skills.find(
			(skill) =>
				skill.freelancer_id === freelancer_id &&
				skill.specialization_id === specialization_id
		);

		return boundedSkill;
	}

	public async findAll(): Promise<Skill[] | undefined> {
		return this.skills;
	}
}

export default FakeSkillRepository;
