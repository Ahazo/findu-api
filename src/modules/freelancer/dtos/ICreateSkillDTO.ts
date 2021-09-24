import { EStatus } from '../../../shared/utils/dtos/EStatus';
import ICreateFreelancerDTO from './ICreateFreelancerDTO';
import ICreateSpecializationDTO from './ICreateSpecializationDTO';

export default interface ICreateSkillsDTO {
	freelancer: ICreateFreelancerDTO;
	specialization: ICreateSpecializationDTO;
	status: EStatus;
}
