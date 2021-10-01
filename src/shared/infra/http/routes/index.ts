import { Router } from 'express';

import professionalLevelRouter from '../../../../modules/freelancer/infra/http/controllers/routes/professionalLevel.routes';
import influencerLevelRouter from '../../../../modules/user/infra/http/routes/influencerLevel.routes';
import sessionRouter from '../../../../modules/user/infra/http/routes/session.routes';
import userRouter from '../../../../modules/user/infra/http/routes/user.routes';
// import postRouter from '../../../../modules/user/infra/http/routes/post.routes';

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/session', sessionRouter);
routes.use('/api/influencerLevel', influencerLevelRouter);
routes.use('/api/professionalLevel', professionalLevelRouter);
// routes.use('/api/area', areaRouter);
// routes.use('/api/skills', influencerLevelRouter);

export default routes;
