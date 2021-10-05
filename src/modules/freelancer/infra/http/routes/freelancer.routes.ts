import { Router } from 'express';

import FreelancerController from '../controllers/FreelancerController';

const freelancerRouter = Router();
const freelancerController = new FreelancerController();

freelancerRouter.post('/', freelancerController.createUser);

freelancerRouter.post('/update', freelancerController.updateFreelancer);

freelancerRouter.get('/', freelancerController.findFreelancerById);

export default freelancerRouter;

// fazer as rotas dos servicos que voce criou
// garantir que funcionam via postman
// questionar se as informacoes que estao sendo passadas sao necessarias
