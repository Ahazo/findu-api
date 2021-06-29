import { injectable, inject } from 'tsyringe';

import Corporation from '../infra/typeorm/entities/Corporation';

import ICreateCorporationDTO from '../dtos/ICreateCorporationDTO';
import ICorporationRepository from '../repositories/ICorporationRepository';

@injectable()
export default class CreateCorporationService {
  constructor (
    @inject('CorporationRepository')
    private corporationRepository: ICorporationRepository,
  ) {}

  public async execute(corporation_data: ICreateCorporationDTO): Promise<Corporation> {
    const corporation = await this.corporationRepository.create(corporation_data);
    console.log(corporation);
    return corporation;
  }
}
