import { injectable, inject } from 'tsyringe';
import Establishment from '../infra/typeorm/entities/Establishment';

import ICreateEstablishmentDTO from '../dtos/ICreateEstablishmentDTO';
import IEstablishmentRepository from '../repositories/IEstablishmentRepository';

@injectable()
export default class CreateEstablishmentService {
  constructor (
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute(establishmentData: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.create(establishmentData);
    console.log("establishment data for create......", establishment);
    return establishment;
  }
}
