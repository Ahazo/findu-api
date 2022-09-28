import { DeleteResult } from 'typeorm';

import ICreateBundleMediaDTO from '../../dtos/bundle/ICreateBundleMediaDTO';
import BundleMedia from '../../infra/typeorm/entities/bundle/BundleMedia';

export default interface IBundleMediaRepository {
	create(data: ICreateBundleMediaDTO): Promise<BundleMedia>;
	delete(id: string): Promise<DeleteResult>;
	findById(id: string): Promise<BundleMedia | undefined>;
}
