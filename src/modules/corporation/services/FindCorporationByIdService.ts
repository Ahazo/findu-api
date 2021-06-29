import { injectable, inject } from 'tsyringe';
import Corporation from '../infra/typeorm/entities/Corporation';

import ICorporationRepository from '../repositories/ICorporationRepository';

@injectable()
export default class FindEstablishmentByIdService {
  constructor (
    @inject('CorporationRepository')
    private corporationRepository: ICorporationRepository,
  ) {}

  public async execute(corporationId: string): Promise<Corporation | undefined> {
    const corporation = await this.corporationRepository.findById(+corporationId);
    console.log(corporation);
    return corporation;
  }
}
