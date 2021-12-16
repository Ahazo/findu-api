import ICreateSkillDTO from '../../../dtos/ICreateSkillDTO';
import Skill from '../../../infra/typeorm/entities/Skill';
import FakeSkillRepository from '../../../repositories/fakes/FakeSkillRepository';
import CreateSkillService from '../CreateSkillService';

describe('CreateSkill', () => {
	let fakeSkillRepository: FakeSkillRepository;

	let createSkillService: CreateSkillService;

	beforeEach(() => {
		fakeSkillRepository = new FakeSkillRepository();

		createSkillService = new CreateSkillService(fakeSkillRepository);
	});

	it('should be able to create skill', async () => {
		const skillData: ICreateSkillDTO = {
			specialization_id: 1,
			freelancer_id: 1,
		};

		expect(await createSkillService.execute(skillData)).toBeInstanceOf(Skill);
	});

	it('should not be able to create skill if specialization_id is already bounded to freelancer', async () => {
		await createSkillService.execute({
			specialization_id: 1,
			freelancer_id: 1,
		});

		await expect(
			createSkillService.execute({
				specialization_id: 1,
				freelancer_id: 1,
			})
		).rejects.toBeInstanceOf(Error);
	});
});
