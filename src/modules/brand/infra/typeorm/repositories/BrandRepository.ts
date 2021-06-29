import { getRepository, Repository } from "typeorm";

import Brand from "../entities/Brand";

import IBrandRepository from "../../../repositories/IBrandRepository";
import ICreateBrandDTO from "../../../dtos/ICreateBrandDTO";

class BrandRepository implements IBrandRepository {
  private brandRepository: Repository<Brand>;

  constructor() {
    this.brandRepository = getRepository(Brand);
  }

  public async create(brand_data: ICreateBrandDTO): Promise<Brand> {
    const brand = this.brandRepository.create(brand_data);
    await this.brandRepository.save(brand);
    return brand;
  }

  public async save(brand: Brand): Promise<Brand> {
    return await this.brandRepository.save(brand);
  }

  public async findByName(brand_name: string): Promise<Brand | undefined> {
    const brand = await this.brandRepository.findOne({
      where: {
        brand_name
      }
    });
    return brand;
  }

  public async findById(id: number): Promise<Brand | undefined> {
    const brand = await this.brandRepository.findOne(id);
    return brand;
  }
}

export default BrandRepository;