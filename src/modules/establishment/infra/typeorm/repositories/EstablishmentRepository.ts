import { getRepository, Repository } from "typeorm";
import Establishment from "../entities/Establishment";

import ICreateEstablishmentDTO from "../../../dtos/ICreateEstablishmentDTO"
import IEstablishmentRepository from "../../../repositories/IEstablishmentRepository";

class EstablishmentRepository implements IEstablishmentRepository {
  private establishmentRepository: Repository<Establishment>;

  constructor() {
    this.establishmentRepository = getRepository(Establishment);
  }

  public async create(establishment_data: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = this.establishmentRepository.create(establishment_data);
    await this.establishmentRepository.save(establishment);
    return establishment;
  }

  public async save(establishment: Establishment): Promise<Establishment> {
    return await this.establishmentRepository.save(establishment);
  }

  public async findByName(establishment_name: string): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findOne({
      where: {
        establishment_name
      }
    });
    return establishment;
  }

  public async findById(id: number): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findOne(id);
    return establishment;
  }
}

export default EstablishmentRepository;
