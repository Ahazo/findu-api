import ICreateSpecializationDTO from '../../../dtos/ICreateSpecializationDTO';
import Specialization from '../../../infra/typeorm/entities/Specialization';
import FakeSpecializationRepository from '../../../infra/typeorm/repositories/fakes/FakeSpecializationRepository';
import CreateSpecializationService from '../CreateSpecializationService';

describe('CreateSpecialization', () => {
	let fakeSpecializationRepository: FakeSpecializationRepository;
	let createSpecializationService: CreateSpecializationService;
	beforeEach(() => {
		fakeSpecializationRepository = new FakeSpecializationRepository();
		createSpecializationService = new CreateSpecializationService(
			fakeSpecializationRepository
		);
	});

	it('should be able to create specialization', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 2,
			description: 'Papiromancia',
		};

		expect(
			await createSpecializationService.execute(specializationData)
		).toBeInstanceOf(Specialization);
	});
});
