import { Router } from 'express';

import AreaController from '../controllers/AreaController';
import SpecializationController from '../controllers/SpecializationController';

const areaRouter = Router();

const areaController = new AreaController();
const specializationController = new SpecializationController();

areaRouter.post('/', areaController.create);
areaRouter.get('/:description', areaController.findByName);
areaRouter.get('/:id', areaController.findById);
areaRouter.put('/', areaController.update);

areaRouter.post('/specialization/', specializationController.create);
areaRouter.get('/specialization/:id', specializationController.findById);
areaRouter.get('/specialization/', specializationController.findAll);

export default areaRouter;
