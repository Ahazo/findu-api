import { EStatus } from '../../../shared/utils/dtos/EStatus';

export default interface ICreateAreaDTO {
	description: string;
	status: EStatus;
}
