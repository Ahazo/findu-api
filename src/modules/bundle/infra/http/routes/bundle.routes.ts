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

bundleRouter.post('/media/', bundleMediaController.create);
bundleRouter.get('/media/:id', bundleMediaController.findById);
bundleRouter.put('/media/', bundleMediaController.update);

bundleRouter.post('/relation/', bundleRelationController.create);
bundleRouter.get('/relation/:id', bundleRelationController.findById);
bundleRouter.put('/relation/', bundleRelationController.update);
bundleRouter.get(
	'/relation/alou/:freelancer_id',
	ensureAuth,
	bundleRelationController.findByFreelancerId
);

export default bundleRouter;
