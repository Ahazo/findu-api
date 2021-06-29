import { Router } from 'express';

import ensureAuth from '../../../../../shared/infra/http/middlewares/EnsureAuth';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  usersController.createUser,
)

usersRouter.get(
  '/',
  ensureAuth,
  usersController.findUserById,
)

export default usersRouter;