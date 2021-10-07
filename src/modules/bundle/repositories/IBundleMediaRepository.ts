import ICreateBundleMediasDTO from '../dtos/ICreateBundleMediaDTO';
import BundleMedia from '../infra/typeorm/entities/BundleMedia';

export default interface IBundleMediaRepository {
	create(data: ICreateBundleMediasDTO): Promise<BundleMedia>;
	save(data: BundleMedia): Promise<BundleMedia>;
	findById(id: number): Promise<BundleMedia | undefined>;
	findByName(name: string): Promise<BundleMedia | undefined>;
	findAll(): Promise<BundleMedia[] | undefined>;
}
