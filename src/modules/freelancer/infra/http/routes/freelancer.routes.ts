import { Router } from 'express';

import ensureAuth from '../../../../../shared/infra/http/middlewares/EnsureAuth';
import FreelancerController from '../controllers/FreelancerController';
import SkillController from '../controllers/SkillController';

const freelancerRouter = Router();

const freelancerController = new FreelancerController();
const skillController = new SkillController();

freelancerRouter.post('/', freelancerController.create);
freelancerRouter.put('/update', freelancerController.update);
freelancerRouter.get('/', freelancerController.findById);

freelancerRouter.post('/skills/', ensureAuth, skillController.create);
freelancerRouter.get('/skills/:id', skillController.findById);

export default freelancerRouter;
