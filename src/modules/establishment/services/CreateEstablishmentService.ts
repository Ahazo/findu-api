import { injectable, inject } from 'tsyringe';
import ICreateEstablishmentDTO from '../dtos/ICreateEstablishmentDTO';
import Establishment from '../infra/typeorm/entities/Establishment';

import IEstablishmentRepository from '../repositories/IEstablishmentRepository';


@injectable()
export default class createEstablishment {
  constructor (
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute(establishmentData: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.create(establishmentData);
    console.log(establishment);
    return establishment;
  }
}
