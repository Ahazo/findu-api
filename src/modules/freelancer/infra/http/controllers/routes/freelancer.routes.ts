import { Router } from 'express';

import FreelancerController from '../FreelancerController';

const freelancerRouter = Router();
const freelancerController = new FreelancerController();

freelancerRouter.post('/', freelancerController.createUser);

freelancerRouter.get('/', freelancerController.findFreelancerById);

export default freelancerRouter;
