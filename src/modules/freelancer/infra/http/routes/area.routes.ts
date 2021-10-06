import { Router } from 'express';

import AreaController from '../controllers/AreaController';
import SpecializationController from '../controllers/SpecializationController';

const areaRouter = Router();

const areaController = new AreaController();
const specializationController = new SpecializationController();

// areaRouter.post('/', areaController.create);
// areaRouter.get('/:id', areaController.findById);
// areaRouter.get('/:name', areaController.findByDescription);

// areaRouter.post('/', specializationController.create);
// areaRouter.get('/:id', specializationController.findById);
// areaRouter.get('/', specializationController.findAll);

export default areaRouter;
