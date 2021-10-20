import { EStatus } from '../../../shared/utils/dtos/EStatus';
import ICreateBundleDTO from './ICreateBundleDTO';

export default interface ICreateBundleMediasDTO {
	bundle_id: number;
	url: string;
	// status: EStatus;
}
