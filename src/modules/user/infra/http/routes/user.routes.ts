import { Router } from 'express';

import ensureAuth from '../../../../../shared/infra/http/middlewares/EnsureAuth';
import SessionController from '../controllers/SessionController';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();
const sessionController = new SessionController();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/', ensureAuth, usersController.findUserById);
usersRouter.put('/:id', ensureAuth, usersController.updateUser);

usersRouter.post('/session', sessionController.create);

export default usersRouter;
