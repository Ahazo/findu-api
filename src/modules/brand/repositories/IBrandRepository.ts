import ICreateBrandDTO from "../dtos/ICreateBrandDTO";
import Brand from "../infra/typeorm/entities/Brand";

export default interface IBrandRepository {
  create(data: ICreateBrandDTO): Promise<Brand>;
  save(user: Brand): Promise<Brand>;
  findById(id: number): Promise<Brand | undefined>;
  findByBrandName(brand_name: string): Promise<Brand | undefined>;
}