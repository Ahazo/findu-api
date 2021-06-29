import { Router } from 'express';

import userRouter from '../../../../modules/user/infra/http/routes/user.routes';
import sessionRouter from '../../../../modules/user/infra/http/routes/session.routes';
import establishmentRouter from '../../../../modules/establishment/infra/http/routes/establishment.routes';
import departmentRouter from '../../../../modules/brand/infra/http/routes/department.routes';
import brandRouter from '../../../../modules/brand/infra/http/routes/brand.routes';

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/session', sessionRouter);
routes.use('/api/establishment', establishmentRouter);
routes.use('/api/department', departmentRouter);
routes.use('/api/brand', brandRouter);

export default routes;