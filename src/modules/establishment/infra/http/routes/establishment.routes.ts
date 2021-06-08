import { Router } from 'express';

import EstablishmentController from '../controllers/EstablishmentController';

const usersRouter = Router();
const establishmentController = new EstablishmentController();

usersRouter.post(
  '/',
  establishmentController.createEstablishment,
);

usersRouter.get(
  '/:id',
  establishmentController.findEstablishmentById,
);

export default usersRouter;