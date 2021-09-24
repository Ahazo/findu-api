import { Router } from 'express';

import InfluencerLevelController from '../controllers/InfluencerLevelController';

const influencerLevelRouter = Router();
const influencerLevelController = new InfluencerLevelController();

influencerLevelRouter.post(
	'/',
	influencerLevelController.createInfluencerLevel
);

influencerLevelRouter.get('/:id', influencerLevelController.findById);

export default influencerLevelRouter;
