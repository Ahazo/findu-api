import { EStatus } from '../../../shared/utils/dtos/EStatus';

export default interface ICreateBundleDTO {
	title: string;
	description: string;
	value: number;
	deadline: Date;
}
