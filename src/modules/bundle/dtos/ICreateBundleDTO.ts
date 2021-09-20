import { EStatus } from '../../../shared/utils/dtos/EStatus'

export interface ICreateBundleDTO {
  title: string;
  description: string;
  value: number;
  deadline: Date;
  status: EStatus;
}
