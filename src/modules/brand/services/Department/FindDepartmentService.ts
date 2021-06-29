import { injectable, inject } from 'tsyringe';

import ICreateDepartmentDTO from '../../dtos/ICreateDepartmentDTO';
import IDepartmentRepository from '../../repositories/IDepartmentRepository';

import Department from '../../infra/typeorm/entities/Department';

@injectable()
export default class findDepartmentService {
  constructor (
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  public async byId(department_id: number): Promise<Department | undefined> {
    const department = await this.departmentRepository.findById(department_id);
    return department;
  }

  public async byName(department_name: string): Promise<Department | undefined> {
    const department = await this.departmentRepository.findByDepartmentName(department_name);
    return department;
  }
}
