import ICreateProfessionalLevelDTO from '../../../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../../../infra/typeorm/entities/ProfessionalLevel';
import FakeProfessionalLevelRepository from '../../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateProfessionalLevelService from '../CreateProfessionalLevelService';

describe('CreateProfessionalLevel', () => {
	let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;
	let createProfessionalLevel: CreateProfessionalLevelService;

	beforeEach(() => {
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
		createProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);
	});

	it('should be able to create professionalLevel', async () => {
		const levelData: ICreateProfessionalLevelDTO = {
			description: 'Almost Professional Mighty',
			experience_needed: 1,
		};

		expect(await createProfessionalLevel.execute(levelData)).toBeInstanceOf(
			ProfessionalLevel
		);
	});

	it('should not be able to create a professional level with same experience_needed', async () => {
		const levelData: ICreateProfessionalLevelDTO = {
			description: 'Very close to a Professional Mighty',
			experience_needed: 7,
		};

		await createProfessionalLevel.execute(levelData);

		const levelWithSameExperienceNeededData: ICreateProfessionalLevelDTO = {
			description: 'Same experience needed level - Copy of mighty',
			experience_needed: 7,
		};

		await expect(
			createProfessionalLevel.execute(levelWithSameExperienceNeededData)
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to create a professional level with same description', async () => {
		const levelData: ICreateProfessionalLevelDTO = {
			description: 'A little far to a Professional Mighty',
			experience_needed: 1,
		};

		await createProfessionalLevel.execute(levelData);

		const levelWithSameDescriptionData: ICreateProfessionalLevelDTO = {
			description: 'A little far to a Professional Mighty',
			experience_needed: 10,
		};

		await expect(
			createProfessionalLevel.execute(levelWithSameDescriptionData)
		).rejects.toBeInstanceOf(Error);
	});
});
