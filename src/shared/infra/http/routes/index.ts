import { Router } from 'express';

import influencerLevelRouter from '../../../../modules/user/infra/http/routes/influencerLevel.routes';
import sessionRouter from '../../../../modules/user/infra/http/routes/session.routes';
import userRouter from '../../../../modules/user/infra/http/routes/user.routes';
// import postRouter from '../../../../modules/user/infra/http/routes/post.routes';

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/session', sessionRouter);
routes.use('/api/influencerLevel', influencerLevelRouter);

// routes.use('/api/post', postRouter);

export default routes;
