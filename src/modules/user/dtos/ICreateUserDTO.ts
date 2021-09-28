import ICreatePersonDTO from './ICreatePersonDTO';

export default interface ICreateUserDTO {
	person: ICreatePersonDTO;
	username: string;
	password: string;
	level_id: number;
}
