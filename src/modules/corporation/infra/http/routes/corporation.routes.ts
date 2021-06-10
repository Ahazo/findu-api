import { Router } from 'express';
import CorporationController from '../controllers/CorporationController';

const corporationRouter = Router();
const corporationController = new CorporationController();

corporationRouter.post(
  '/',
  corporationController.createCorporation,
);

corporationRouter.get(
  '/:id',
  corporationController.findCorporationById,
)

export default corporationRouter;