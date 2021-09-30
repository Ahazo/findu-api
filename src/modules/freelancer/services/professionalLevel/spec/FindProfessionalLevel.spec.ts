import { CreateProfessionalLevel1632248821790 } from 'shared/infra/typeorm/migrations/1632248821790-CreateProfessionalLevel';
import { TableForeignKey } from 'typeorm';

import ICreateProfessionalLevelDTO from '../../../dtos/ICreateProfessionalLevelDTO';
import FakeProfessionalLevelRepository from '../../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateProfessionalLevelService from '../CreateProfessionalLevelService';
import FindProfessionalLevelService from '../FindProfessionalLevelService';

describe('FindProfessionalLevel', () => {
	it('should be able to find a professional level by its ID', async () => {
		const fakeProfessionalLevelRepository =
			new FakeProfessionalLevelRepository();

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const FindProfessionalLevel = new FindProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const level: ICreateProfessionalLevelDTO = {
			description: 'A little mighty',
			experience_needed: 1,
		};

		const lvl = await CreateProfessionalLevel.execute(level);

		const find = await FindProfessionalLevel.executeById(lvl.id);

		expect(find).toEqual(lvl);
	});

	it('should not be able to find a professional level by the wrong id', async () => {
		const fakeProfessionalLevelRepository =
			new FakeProfessionalLevelRepository();

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const FindProfessionalLevel = new FindProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const level: ICreateProfessionalLevelDTO = {
			description: 'A little mighty',
			experience_needed: 1,
		};

		const lvl = await CreateProfessionalLevel.execute(level);

		const find = await FindProfessionalLevel.executeById(lvl.id + 1);

		expect(find).toEqual(undefined);
	});
});
