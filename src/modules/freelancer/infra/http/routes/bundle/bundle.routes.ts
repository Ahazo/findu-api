import { Router } from 'express';

import ensureAuth from '../../../../../../shared/infra/http/middlewares/EnsureAuth';
import BundleController from '../../controllers/bundle/BundleController';
import BundleMediaController from '../../controllers/bundle/BundleMediaController';

const bundleRouter = Router();

const bundleController = new BundleController();
const bundleMediaController = new BundleMediaController();

bundleRouter.post('/', ensureAuth, bundleController.create);
bundleRouter.get('/:id', ensureAuth, bundleController.findById);
bundleRouter.put('/', ensureAuth, bundleController.update);

bundleRouter.post('/media/', bundleMediaController.create);
bundleRouter.delete('/media/:id', bundleMediaController.delete);

export default bundleRouter;
