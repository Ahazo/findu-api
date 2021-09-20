import ICreateFreelancerDTO from './ICreateFreelancerDTO'
import { EStatus } from '../../../shared/utils/dtos/EStatus'

export interface ICreateBundleDTO {
  freelancer: ICreateFreelancerDTO
  title: string;
  description: string;
  value: number;
  deadline: Date;

  status: EStatus;
}
