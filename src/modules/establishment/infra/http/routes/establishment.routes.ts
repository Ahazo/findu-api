import { Router } from 'express';

import EstablishmentController from '../controllers/EstablishmentController';

const establishmentRouter = Router();
const establishmentController = new EstablishmentController();

establishmentRouter.post(
  '/',
  establishmentController.createEstablishment,
);

establishmentRouter.get(
  '/:id',
  establishmentController.findEstablishmentById,
);

export default establishmentRouter;