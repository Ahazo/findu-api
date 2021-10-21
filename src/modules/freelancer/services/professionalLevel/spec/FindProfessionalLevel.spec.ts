import FakeProfessionalLevelRepository from '../../../repositories/fakes/FakeProfessionalLevelRepository';
import CreateProfessionalLevelService from '../CreateProfessionalLevelService';
import FindProfessionalLevelService from '../FindProfessionalLevelService';

describe('FindProfessionalLevel', () => {
	let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

	let createProfessionalLevel: CreateProfessionalLevelService;
	let findProfessionalLevel: FindProfessionalLevelService;

	beforeEach(() => {
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();

		createProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		findProfessionalLevel = new FindProfessionalLevelService(
			fakeProfessionalLevelRepository
		);
	});

	it('should be able to find a professional level by its ID', async () => {
		const professionalLevel = await createProfessionalLevel.execute({
			level_number: 1,
			description: 'Professional Level Description',
			experience_needed: 1,
		});

		const professionalLevelFound = await findProfessionalLevel.executeById(
			professionalLevel.id
		);

		expect(professionalLevelFound).toEqual(professionalLevel);
	});

	it('should not be able to find a professional level by unexistent id', async () => {
		const unexistentId = Math.floor(Math.random() * (100 - 1) + 1);

		await expect(
			findProfessionalLevel.executeById(unexistentId)
		).rejects.toBeInstanceOf(Error);
	});
});
