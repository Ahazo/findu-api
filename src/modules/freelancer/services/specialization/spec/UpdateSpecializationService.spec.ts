import ICreateSpecializationDTO from '../../../dtos/ICreateSpecializationDTO';
import FakeSpecializationRepository from '../../../infra/typeorm/repositories/fakes/FakeSpecializationRepository';
import CreateSpecializationService from '../CreateSpecializationService';
import UpdateSpecializationService from '../UpdateSpecializationService';

describe('UpdateSpecialization', () => {
	let fakeSpecializationRepository: FakeSpecializationRepository;

	let createSpecializationService: CreateSpecializationService;
	let updateSpecializationService: UpdateSpecializationService;

	beforeEach(() => {
		fakeSpecializationRepository = new FakeSpecializationRepository();

		createSpecializationService = new CreateSpecializationService(
			fakeSpecializationRepository
		);
		updateSpecializationService = new UpdateSpecializationService(
			fakeSpecializationRepository
		);
	});

	it('should be able to update specialization', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const specializationData1: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em analogia vertical',
		};

		const specialization1 = await createSpecializationService.execute(
			specializationData1
		);

		const updatedSpecialization = await updateSpecializationService.execute(
			specialization1
		);

		expect(updatedSpecialization).toEqual(specialization1);
	});
});
