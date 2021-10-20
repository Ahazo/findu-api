import ICreateSkillDTO from '../../../../dtos/ICreateSkillDTO';
import ISkillRepository from '../../../../repositories/ISkillRepository';
import Skill from '../../entities/Skill';

class FakeSkillRepository implements ISkillRepository {
	private skills: Skill[] = [];

	public async create(data: ICreateSkillDTO): Promise<Skill> {
		const skill = new Skill();

		Object.assign(
			skill,
			{ id: Math.floor(Math.random() * (10 - 1) + 1) },
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

	public async findAll(): Promise<Skill[] | undefined> {
		return this.skills;
	}
}

export default FakeSkillRepository;
