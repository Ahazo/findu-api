import ICreateCorporationDTO from "../dtos/ICreateCorporationDTO";
import Corporation from "../infra/typeorm/entities/Corporation";

export default interface ICorporationRepository {
  save(corporation: Corporation): Promise<Corporation>;
  create(corporation_data: ICreateCorporationDTO): Promise<Corporation>;
  findById(id: number): Promise<Corporation | undefined>;
  findByCorporationName(corporation_name: string): Promise<Corporation | undefined>;
}