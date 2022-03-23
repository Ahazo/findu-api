import ICreateBundleDTO from '../dtos/ICreateBundleDTO';
import Bundle from '../infra/typeorm/entities/Bundle';

export default interface IBlundeRepository {
	create(data: ICreateBundleDTO): Promise<Bundle>;
	findById(id: number): Promise<Bundle | undefined>;
	save(data: Bundle): Promise<Bundle>;
}
