import { injectable, inject } from 'tsyringe';

import ICreateDepartmentDTO from '../../dtos/ICreateDepartmentDTO';
import IDepartmentRepository from '../../repositories/IDepartmentRepository';

import Department from '../../infra/typeorm/entities/Department';

@injectable()
export default class CreateDepartmentService {
  constructor (
    @inject('DepartmentRepository')
    private departmentRepository: IDepartmentRepository,
  ) {}

  public async execute(departmentData: ICreateDepartmentDTO): Promise<Department> {
    console.log('Department Data', departmentData);
    const department = await this.departmentRepository.create(departmentData);
    console.log('Department...', department);
    return department;
  }
}
