import { getRepository, Repository } from "typeorm";

import Department from "../entities/Department";

import IDepartmentRepository from "../../../repositories/IDepartmentRepository";
import ICreateDepartmentDTO from "modules/brand/dtos/ICreateDepartmentDTO";

class DepartmentRepository implements IDepartmentRepository {
  private departmentRepository: Repository<Department>;

  constructor() {
    this.departmentRepository = getRepository(Department);
  }

  public async create(department_data: ICreateDepartmentDTO): Promise<Department> {
    const department = this.departmentRepository.create(department_data);
    await this.departmentRepository.save(department);
    return department;
  }

  public async save(department: Department): Promise<Department> {
    return await this.departmentRepository.save(department);
  }

  public async findByDepartmentName(department_name: string): Promise<Department | undefined> {
    const department = await this.departmentRepository.findOne({
      where: {
        department_name
      }
    });

    return department;
  }

  public async findById(id: number): Promise<Department | undefined> {
    const department = await this.departmentRepository.findOne(id);
    return department;
  }
}

export default DepartmentRepository;
