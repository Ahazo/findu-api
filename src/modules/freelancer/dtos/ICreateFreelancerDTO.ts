import ICreateProfessionalLevelDTO from './ICreateProfessionalLevelDTO';
import ICreateSkillsDTO from './ICreateSkillDTO';

export default interface ICreateFreelancerDTO {
	user_id: number;
	level_id: number;
	skill: ICreateSkillsDTO;
}
