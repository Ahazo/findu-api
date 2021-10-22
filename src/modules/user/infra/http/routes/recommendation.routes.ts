import { Router } from 'express';

import PostRecommendationController from '../controllers/PostRecommendationController';
import RecommendationController from '../controllers/RecommendationController';

const recommendationRouter = Router();

const postRecommendationController = new PostRecommendationController();
const recommendationController = new RecommendationController();

recommendationRouter.post('/', recommendationController.create);
recommendationRouter.get('/:id', recommendationController.findById);
recommendationRouter.put('/', recommendationController.update);

recommendationRouter.post(
	'/postRecommendation/',
	postRecommendationController.create
);
recommendationRouter.get(
	'/postRecommendation/:id',
	postRecommendationController.findById
);
recommendationRouter.put(
	'/postRecommendation/',
	postRecommendationController.update
);

export default recommendationRouter;
