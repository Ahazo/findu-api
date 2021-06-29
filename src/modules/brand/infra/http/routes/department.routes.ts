import { Router } from 'express';
import DepartmentController from '../controllers/DepartmentController';

const departmentRouter = Router();
const departmentController = new DepartmentController();

departmentRouter.post(
  '/',
  departmentController.create,
)

// departmentRouter.get(
//   '/',
//   departmentController.findById,
// )

export default departmentRouter;