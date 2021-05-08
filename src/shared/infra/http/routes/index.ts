import { Router } from 'express';
import userRouter from '../../../../modules/user/infra/http/routes/user.routes';

const routes = Router();

routes.use('/api/users', userRouter);

export default routes;