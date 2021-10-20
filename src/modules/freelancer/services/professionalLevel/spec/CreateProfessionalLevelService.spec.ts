import ICreateProfessionalLevelDTO from '../../../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../../../infra/typeorm/entities/ProfessionalLevel';
import FakeProfessionalLevelRepository from '../../../repositories/fakes/FakeProfessionalLevelRepository';
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
			level_number: 1,
			description: 'Professional Level Description',
			experience_needed: 1,
		};

		expect(await createProfessionalLevel.execute(levelData)).toBeInstanceOf(
			ProfessionalLevel
		);
	});

	it('should not be able to create a professional level with same experience', async () => {
		const levelData: ICreateProfessionalLevelDTO = {
			level_number: 1,
			description: 'Professional Level Description',
			experience_needed: 7,
		};

		await createProfessionalLevel.execute(levelData);

		const levelWithSameExperienceNeededData: ICreateProfessionalLevelDTO = {
			level_number: 2,
			description: 'Professional level with same experience needed',
			experience_needed: 7,
		};

		await expect(
			createProfessionalLevel.execute(levelWithSameExperienceNeededData)
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to create a professional level with same description', async () => {
		const levelData: ICreateProfessionalLevelDTO = {
			level_number: 1,
			description: 'Duplicated Professional Level Description',
			experience_needed: 1,
		};

		await createProfessionalLevel.execute(levelData);

		const levelWithSameDescriptionData: ICreateProfessionalLevelDTO = {
			level_number: 2,
			description: 'Duplicated Professional Level Description',
			experience_needed: 10,
		};

		await expect(
			createProfessionalLevel.execute(levelWithSameDescriptionData)
		).rejects.toBeInstanceOf(Error);
	});

	it('should not be able to create a professional level with same level number', async () => {
		await createProfessionalLevel.execute({
			level_number: 1,
			description: 'Professional Level',
			experience_needed: 1,
		});

		await expect(
			createProfessionalLevel.execute({
				level_number: 1,
				description: 'Professional Level description',
				experience_needed: 1,
			})
		).rejects.toBeInstanceOf(Error);
	});
});
