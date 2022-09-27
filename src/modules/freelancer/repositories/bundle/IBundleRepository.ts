import { DeleteResult } from 'typeorm';

import ICreateBundleDTO from '../../dtos/bundle/ICreateBundleDTO';
import Bundle from '../../infra/typeorm/entities/bundle/Bundle';

export default interface IBlundeRepository {
	create(data: ICreateBundleDTO): Promise<Bundle>;
	findById(id: number): Promise<Bundle | undefined>;
	save(data: Bundle): Promise<Bundle>;
	delete(id: number): Promise<DeleteResult>;
}
