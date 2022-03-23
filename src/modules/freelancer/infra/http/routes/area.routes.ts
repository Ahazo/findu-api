import { Router } from 'express';

import AreaController from '../controllers/AreaController';

const areaRouter = Router();

const areaController = new AreaController();

areaRouter.post('/', areaController.create);
areaRouter.get('/:description', areaController.findByDescription);
areaRouter.get('/:id', areaController.findById);
areaRouter.put('/', areaController.update);

export default areaRouter;
