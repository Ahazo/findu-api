import ICreateSkillsDTO from '../dtos/ICreateSkillDTO';
import Skill from '../infra/typeorm/entities/Skill';

export default interface ISkillRepository {
	create(data: ICreateSkillsDTO): Promise<Skill>;
	save(skill: Skill): Promise<Skill>;
	findById(id: number): Promise<Skill | undefined>;
	findAll(): Promise<Skill[] | undefined>;

	findAllByFreelancerId(freelancer_id: number): Promise<Skill[] | undefined>;
	findAllBySpecializationId(
		specialization_id: number
	): Promise<Skill[] | undefined>;
	findBoundedSkill(
		freelancer_id: number,
		specialization_id: number
	): Promise<Skill | undefined>;
}
