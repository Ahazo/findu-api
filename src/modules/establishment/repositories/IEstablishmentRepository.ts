import ICreateEstablishmentDTO from "@modules/establishment/dtos/ICreateEstablishmentDTO";
import Establishment from "../infra/typeorm/entities/Establishment";

export default interface IEstablishmentRepository {
  create(data: ICreateEstablishmentDTO): Promise<Establishment>;
  save(establishment: Establishment): Promise<Establishment>;
  findById(id: number): Promise<Establishment | undefined>;
  findByName(establishment_name: string): Promise<Establishment | undefined>;
}