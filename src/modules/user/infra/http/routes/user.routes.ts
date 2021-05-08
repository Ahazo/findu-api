import { Router } from 'express';

import UsersController from '../controllers/UsersControllers';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  usersController.createUser,
)

export default usersRouter;