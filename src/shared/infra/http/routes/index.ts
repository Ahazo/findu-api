import { Router } from 'express';
import userRouter from '@modules/user/infra/http/routes/user.routes';
import sessionRouter from '@modules/user/infra/http/routes/session.routes';

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/session', sessionRouter);

export default routes;