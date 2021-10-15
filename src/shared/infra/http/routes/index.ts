import { Router } from 'express';

import bundleRouter from '../../../../modules/bundle/infra/http/routes/bundle.routes';
import areaRouter from '../../../../modules/freelancer/infra/http/routes/area.routes';
import freelancerRouter from '../../../../modules/freelancer/infra/http/routes/freelancer.routes';
import professionalLevelRouter from '../../../../modules/freelancer/infra/http/routes/professionalLevel.routes';
import influencerLevelRouter from '../../../../modules/user/infra/http/routes/influencerLevel.routes';
import userRouter from '../../../../modules/user/infra/http/routes/user.routes';

const routes = Router();
routes.use('/api/users', userRouter);
routes.use('/api/influencerLevel', influencerLevelRouter);
routes.use('/api/professionalLevel', professionalLevelRouter);
routes.use('/api/freelancer', freelancerRouter);
routes.use('/api/area', areaRouter);
routes.use('/api/bundle', bundleRouter);

export default routes;
