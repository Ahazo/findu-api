import ICreateBundleRelationDTO from '../dtos/ICreateBundleRelationDTO';
import Bundle from '../infra/typeorm/entities/Bundle';
import BundleRelation from '../infra/typeorm/entities/BundleRelation';

export default interface IBundleRelationRepository {
	create(data: ICreateBundleRelationDTO): Promise<BundleRelation>;
	save(data: BundleRelation): Promise<BundleRelation>;
	findById(id: number): Promise<BundleRelation | undefined>;
	findAll(): Promise<BundleRelation[] | undefined>;
}
