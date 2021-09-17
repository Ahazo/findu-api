import { Router } from 'express';

import userRouter from '../../../../modules/user/infra/http/routes/user.routes';
import sessionRouter from '../../../../modules/user/infra/http/routes/session.routes';
<<<<<<< Updated upstream
import establishmentRouter from '../../../../modules/establishment/infra/http/routes/establishment.routes';
import departmentRouter from '../../../../modules/brand/infra/http/routes/department.routes';
import brandRouter from '../../../../modules/brand/infra/http/routes/brand.routes';
=======
import postRouter from '../../../../modules/user/infra/http/routes/post.routes';
>>>>>>> Stashed changes

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/session', sessionRouter);
<<<<<<< Updated upstream
routes.use('/api/establishment', establishmentRouter);
routes.use('/api/department', departmentRouter);
routes.use('/api/brand', brandRouter);
=======
routes.use('/api/post', postRouter);
>>>>>>> Stashed changes

export default routes;