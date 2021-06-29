import ICreateCorporationDTO from "../../../dtos/ICreateCorporationDTO";
import ICorporationRepository from "../../../repositories/ICorporationRepository";
import { getRepository, Repository } from "typeorm";
import Corporation from "../entities/Corporation";

class CorporationRepository implements ICorporationRepository {
  private corporationRepository: Repository<Corporation>;

  constructor() {
    this.corporationRepository = getRepository(Corporation);
  }

  public async create(corporation_data: ICreateCorporationDTO): Promise<Corporation> {
    const corporation = this.corporationRepository.create(corporation_data);
    await this.corporationRepository.save(corporation);
    return corporation;
  }

  public async save(corporation: Corporation): Promise<Corporation> {
    return await this.corporationRepository.save(corporation);
  }

  public async findByCorporationName(corporation_name: string): Promise<Corporation | undefined> {
    const corporation = await this.corporationRepository.findOne({
      where: {
        corporation_name
      }
    });
    return corporation;
  }

  public async findById(id: number): Promise<Corporation | undefined> {
    const corporation = await this.corporationRepository.findOne(id);
    return corporation;
  }
}

export default CorporationRepository;