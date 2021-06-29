import { injectable, inject } from 'tsyringe';
import ICreateBrandDTO from '../../dtos/ICreateBrandDTO';
import Brand from '../../infra/typeorm/entities/Brand';
import IBrandRepository from '../../repositories/IBrandRepository';

@injectable()
export default class CreateBrandService {
  constructor (
    @inject('BrandRepository')
    private brandRepository: IBrandRepository,
  ) {}

  public async execute(brandData: ICreateBrandDTO): Promise<Brand | undefined> {
    const brand = await this.brandRepository.create(brandData);
    return brand;
  }
}
