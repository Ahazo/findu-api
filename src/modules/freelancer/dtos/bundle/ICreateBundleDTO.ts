import ICreateBundleDetailDTO from './ICreateBundleDetailDTO';
import ICreateBundleMediaDTO from './ICreateBundleMediaDTO';

export default interface ICreateBundleDTO {
	freelancer_id: string;
	title: string;
	bundle_detail: ICreateBundleDetailDTO;
	bundle_media: ICreateBundleMediaDTO;
}
