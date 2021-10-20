import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSkillService from '../../../services/skill/CreateSkillService';
import FindSkillService from '../../../services/skill/FindSkillService';
import UpdateSkillService from '../../../services/skill/UpdateSkillService';

export default class SkillController {
	async create(request: Request, response: Response): Promise<Response> {
		const skillData = request.body;

		const createSkill = container.resolve(CreateSkillService);
		const skill = await createSkill.execute(skillData);

		if (!skill)
			response.status(400).json({
				message: 'There was an error creating your skill',
			});

		return response.status(200).json(skill);
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findSkill = container.resolve(FindSkillService);
		const { id } = request.params;
		const skill = await findSkill.executeById(+id);

		if (!skill) {
			response.status(500).json({
				message: 'Professional Level id not found',
			});
		}

		return response.status(200).json(skill);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateSkill = container.resolve(UpdateSkillService);
		const skillData = request.body;

		await updateSkill.execute(skillData);

		return response.status(204).send();
	}
}
