import { injectable, inject } from 'tsyringe';

import IBrandRepository from '../../repositories/IBrandRepository';
import Brand from '../../infra/typeorm/entities/Brand';

@injectable()
export default class findBrandService {
  constructor (
    @inject('BrandRepository')
    private brandRepository: IBrandRepository,
  ) {}

  public async byId(brand_id: number): Promise<Brand | undefined> {
    const brand = await this.brandRepository.findById(brand_id);
    return brand;
  }

  public async byName(brand_name: string): Promise<Brand | undefined> {
    const brand = await this.brandRepository.findByName(brand_name);
    return brand;
  }
}
