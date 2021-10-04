import { Router } from 'express';

import FreelancerController from '../controllers/FreelancerController';

const freelancerRouter = Router();
const freelancerController = new FreelancerController();

freelancerRouter.post('/', freelancerController.createUser);

freelancerRouter.post('/update', freelancerController.updateFreelancer);

freelancerRouter.get('/', freelancerController.findFreelancerById);

export default freelancerRouter;
