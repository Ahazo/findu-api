import { Router } from 'express';

import FreelancerController from '../controllers/FreelancerController';
import SkillController from '../controllers/SkillController';

const freelancerRouter = Router();

const freelancerController = new FreelancerController();
const skillController = new SkillController();

freelancerRouter.post('/', freelancerController.create);
freelancerRouter.put('/update', freelancerController.update);
freelancerRouter.get('/', freelancerController.findById);

freelancerRouter.post('/skills/', skillController.create);
freelancerRouter.get('/skills/:id', skillController.findById);

export default freelancerRouter;
