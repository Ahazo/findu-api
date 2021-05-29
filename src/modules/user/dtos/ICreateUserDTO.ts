import ICreatePersonDTO from './ICreatePersonDTO';

export enum Status {
  active = 'active',
  inactive = 'inactive',
  deleted = 'deleted'
}

export default interface ICreateUserDTO {
  person: ICreatePersonDTO;
  username: string;
  password: string;
  status: Status;
  followers_count: number;
  campaigns_count: number;
  recommendations_count: number;
  experience: number;
}