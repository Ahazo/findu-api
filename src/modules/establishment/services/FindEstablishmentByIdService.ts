import { injectable, inject } from 'tsyringe';
import Establishment from '../infra/typeorm/entities/Establishment';

import IEstablishmentRepository from '../repositories/IEstablishmentRepository';


@injectable()
export default class FindEstablishmentByIdService {
  constructor (
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute(establishmentId: string): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findById(+establishmentId);
    console.log(establishment);
    return establishment;
  }
}
