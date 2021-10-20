import { EStatus } from '../../../../../shared/utils/dtos/EStatus';
import FakeSkillRepository from '../../../repositories/fakes/FakeSkillRepository';
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
		const skill = await createSkillService.execute({
			freelancer_id: 1,
			specialization_id: 1,
		});

		const updatedSkill = await updateSkillService.execute({
			...skill,
			status: EStatus.deleted,
		});

		expect(updatedSkill.status).toEqual('deleted');
	});
});
