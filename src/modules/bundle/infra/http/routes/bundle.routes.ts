import { Router } from 'express';

import ensureAuth from '../../../../../shared/infra/http/middlewares/EnsureAuth';
import BundleController from '../controllers/BundleController';
import BundleMediaController from '../controllers/BundleMediaController';
import BundleRelationController from '../controllers/BundleRelationController';

const bundleRouter = Router();

const bundleController = new BundleController();
const bundleMediaController = new BundleMediaController();
const bundleRelationController = new BundleRelationController();

bundleRouter.post('/', ensureAuth, bundleController.create);
bundleRouter.get('/:id', ensureAuth, bundleController.findById);
bundleRouter.put('/', ensureAuth, bundleController.update);

bundleRouter.post('/bundlemedia/', bundleMediaController.create);
bundleRouter.get('/bundlemedia/:id', bundleMediaController.findById);
bundleRouter.put('/bundlemedia/', bundleMediaController.update);

bundleRouter.post('/bundlerelation/', bundleRelationController.create);
bundleRouter.get('/bundlerelation/:id', bundleRelationController.findById);
bundleRouter.put('/bundlerelation/', bundleRelationController.update);

export default bundleRouter;
