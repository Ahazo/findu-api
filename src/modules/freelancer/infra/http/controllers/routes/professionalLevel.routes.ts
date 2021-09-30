import { Router } from 'express';

import ProfessionalLevelController from '../ProfessionalLevelController';

const professionalLevelRouter = Router();
const professionalLevelController = new ProfessionalLevelController();

professionalLevelRouter.post(
	'/',
	professionalLevelController.createProfessionalLevel
);

professionalLevelRouter.get('/:id', professionalLevelController.findById);

export default professionalLevelRouter;
