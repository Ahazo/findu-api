import { Router } from 'express';
import BrandController from '../controllers/BrandController';

const brandRouter = Router();
const brandController = new BrandController();

brandRouter.post(
  '/',
  brandController.create
);

brandRouter.get(
  '/:id',
  brandController.findById
);

brandRouter.get(
  '/',
  brandController.findByName
);

export default brandRouter;