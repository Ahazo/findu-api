import ICreateProfessionalLevelDTO from '../../../dtos/ICreateProfessionalLevelDTO';
import ProfessionalLevel from '../../../infra/typeorm/entities/ProfessionalLevel';
import FakeProfessionalLevelRepository from '../../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateProfessionalLevelService from '../CreateProfessionalLevelService';

describe('CreateProfessionalLevel', () => {
	it('should be able to create professionalLevel', async () => {
		const fakeProfessionalLevelRepository =
			new FakeProfessionalLevelRepository();

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateProfessionalLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		expect(await CreateProfessionalLevel.execute(levelData)).toBeInstanceOf(
			ProfessionalLevel
		);
	});
});
