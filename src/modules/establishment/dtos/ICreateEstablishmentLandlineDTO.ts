import { EStatus } from '../../../shared/utils/dtos/EStatus';

import ICreateEstablishmentDTO from './ICreateEstablishmentDTO';

export default interface ICreateEstablishmentLandlineDTO {
  establishment: ICreateEstablishmentDTO;
  landline?: string;
  status: EStatus;
}