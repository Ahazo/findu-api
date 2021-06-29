import ICreatePersonDTO from './ICreatePersonDTO';

import { EStatus } from '../../../shared/utils/dtos/EStatus';

export default interface ICreateUserDTO {
  person: ICreatePersonDTO;
  username: string;
  password: string;
  status: EStatus;
  followers_count: number;
  campaigns_count: number;
  recommendations_count: number;
  experience: number;
}