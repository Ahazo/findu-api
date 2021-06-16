import { injectable, inject } from 'tsyringe';
import Establishment from '../infra/typeorm/entities/Establishment';

import IEstablishmentRepository from '../repositories/IEstablishmentRepository';


@injectable()
export default class FindEstablishmentByIdService {
  constructor (
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async executeById(establishmentId: string): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findById(+establishmentId);
    console.log(establishment);
    return establishment;
  }

  public async executeByName(establishment_name: string): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findByName(establishment_name);
    console.log(establishment);
    return establishment;
  }
}
