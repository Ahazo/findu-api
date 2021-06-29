import ICreateDepartment from "../dtos/ICreateDepartmentDTO";
import Department from "../infra/typeorm/entities/Department";

export default interface IDepartmentRepository {
  create(data: ICreateDepartment): Promise<Department>;
  save(user: Department): Promise<Department>;
  findById(id: number): Promise<Department | undefined>;
  findByDepartmentName(department_name: string): Promise<Department | undefined>;
}