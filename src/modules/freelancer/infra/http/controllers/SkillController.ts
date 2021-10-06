import { Request, Response } from 'express';
import CreateSkillService from 'modules/freelancer/services/skill/CreateSkillService';
import FindSkillService from 'modules/freelancer/services/skill/FindSkillService';
import { container } from 'tsyringe';

export default class SkillController {
	async create(request: Request, response: Response): Promise<Response> {
		const skillData = request.body;

		const createSkill = container.resolve(CreateSkillService);
		const skill = await createSkill.execute(skillData);

		if (!skill)
			response.status(400).json({
				message: 'There was an error creating professional level',
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
}
