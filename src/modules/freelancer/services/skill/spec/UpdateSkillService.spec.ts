import ICreateAreaDTO from 'modules/freelancer/dtos/ICreateAreaDTO';
import ICreateSkillDTO from 'modules/freelancer/dtos/ICreateSkillDTO';

import FakeSkillRepository from '../../../infra/typeorm/repositories/fakes/FakeSkillRepository';
import CreateSkillService from '../CreateSkillService';
import UpdateSkillService from '../UpdateSkillService';

describe('UpdateSkill', () => {
	let fakeSkillRepository: FakeSkillRepository;

	let createSkillService: CreateSkillService;
	let updateSkillService: UpdateSkillService;

	beforeEach(() => {
		fakeSkillRepository = new FakeSkillRepository();

		createSkillService = new CreateSkillService(fakeSkillRepository);
		updateSkillService = new UpdateSkillService(fakeSkillRepository);
	});

	it('should be able to update skill', async () => {
		const skillData: ICreateSkillDTO = {
			freelancer_id: 1,
			specialization_id: 1,
		};

		const skill = await createSkillService.execute(skillData);

		const skillData1: ICreateSkillDTO = {
			freelancer_id: 2,
			specialization_id: 2,
		};

		const skill1 = await createSkillService.execute(skillData1);

		const updatedSkill = await updateSkillService.execute(skill1);

		expect(updatedSkill).toEqual(skill1);
	});
});
