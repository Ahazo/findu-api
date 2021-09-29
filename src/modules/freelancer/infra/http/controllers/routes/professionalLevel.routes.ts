import { Router } from 'express';

// eslint-disable-next-line import/no-unresolved
import ProfessionalLevelController from '../ProfessionalLevelController';

const professionalLevelRouter = Router();
const professionalLevelController = new ProfessionalLevelController();

professionalLevelRouter.post(
	'/',
	professionalLevelController.createProfessionalLevel
);

professionalLevelRouter.get('/:id', professionalLevelController.findById);

export default professionalLevelRouter;
