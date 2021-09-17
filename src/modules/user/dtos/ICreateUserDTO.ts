import { EStatus } from '../../../shared/utils/dtos/EStatus';

import ICreateInfluencerLevelDTO from './ICreateInfluencerLevelDTO';
import ICreatePersonDTO from './ICreatePersonDTO';

export default interface ICreateUserDTO {
  person: ICreatePersonDTO;
  username: string;
  password: string;
  level: ICreateInfluencerLevelDTO;
  experience: number;
  followers_count: number;
  following_count: number;
  status: EStatus;
}
