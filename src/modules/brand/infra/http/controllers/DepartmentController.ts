import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { string } from 'yargs';

import CreateDepartmentService from '../../../services/Department/CreateDepartmentService';
import FindDepartmentService from '../../../services/Department/FindDepartmentService';

export default class DepartmentController {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const departmentData = request.body;

    if (!departmentData) {
      return response.status(400).json({
        errorMessage: 'Invalid request'
      })
    }

    const createDepartmentService = container.resolve(CreateDepartmentService);
    const department = await createDepartmentService.execute(departmentData)

    return response.json(department);
  }

  public async findDepartmentById(request: Request, response: Response): Promise<Response> {
    const { id: department_id } = request.params;

    const findDepartmentService = container.resolve(FindDepartmentService);
    const department = await findDepartmentService.byId(+department_id)

    if (!department) {
      return response.status(400).json({
        errorMessage: 'Department not found'
      })
    }

    return response.status(200).json({
      department
    })
  }

  public async findByDepartmentName(request: Request, response: Response): Promise<Response> {
    const { department_name } = request.body;

    const findDepartmentService = container.resolve(FindDepartmentService);
    const department = await findDepartmentService.byName(department_name);

    if (!department) {
      return response.status(400).json({
        errorMessage: 'Department not found'
      });
    }

    return response.status(200).json({
      department
    })
  }

}