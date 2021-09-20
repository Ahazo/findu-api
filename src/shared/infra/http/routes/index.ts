import { Router } from 'express';

import userRouter from '../../../../modules/user/infra/http/routes/user.routes';
import sessionRouter from '../../../../modules/user/infra/http/routes/session.routes';
// import postRouter from '../../../../modules/user/infra/http/routes/post.routes';

const routes = Router();
routes.use('/api/users', userRouter);
// routes.use('/api/session', sessionRouter);
// routes.use('/api/establishment', establishmentRouter);
// routes.use('/api/department', departmentRouter);
// routes.use('/api/brand', brandRouter);
// routes.use('/api/post', postRouter);

export default routes;
