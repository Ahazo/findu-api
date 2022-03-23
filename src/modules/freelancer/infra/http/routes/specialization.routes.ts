import { Router } from 'express';

import SpecializationController from '../controllers/SpecializationController';

const specializationRouter = Router();
const specializationController = new SpecializationController();

specializationRouter.post('/', specializationController.create);
specializationRouter.get('/:id', specializationController.findById);
specializationRouter.get('/', specializationController.findAll);

export default specializationRouter;
