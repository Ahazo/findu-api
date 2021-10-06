import ICreateSpecializationDTO from 'modules/freelancer/dtos/ICreateSpecializationDTO';
import Specialization from 'modules/freelancer/infra/typeorm/entities/Specialization';

import FakeSpecializationRepository from '../../../infra/typeorm/repositories/fakes/FakeSpecializationRepository';
import CreateSpecializationService from '../CreateSpecializationService';
import FindSpecializationService from '../FindSpecializationService';

describe('FindSpecialization', () => {
	let fakeSpecializationRepository: FakeSpecializationRepository;

	let createSpecializationService: CreateSpecializationService;
	let findSpecializationService: FindSpecializationService;

	beforeEach(() => {
		fakeSpecializationRepository = new FakeSpecializationRepository();

		createSpecializationService = new CreateSpecializationService(
			fakeSpecializationRepository
		);
		findSpecializationService = new FindSpecializationService(
			fakeSpecializationRepository
		);
	});

	it('it should be able to find specialization by its ID', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const find = await findSpecializationService.executeById(specialization.id);

		expect(find).toEqual(specialization);
	});

	it('it should be able to find specialization by its name', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const find = await findSpecializationService.executeByName(
			'especializado em tecnologia malucaaaaaa'
		);

		expect(find).toEqual(specialization);
	});

	it('it should not be able to find specialization by its wrong ID', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const find = await findSpecializationService.executeById(
			specialization.id + 1
		);

		expect(find).toEqual(undefined);
	});

	it('it should not be able to find specialization by its wrong name', async () => {
		const specializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const specialization = await createSpecializationService.execute(
			specializationData
		);

		const find = await findSpecializationService.executeByName(
			'especializado em tecnologia normal'
		);

		expect(find).toEqual(undefined);
	});

	it('it should ba able to find specializations', async () => {
		const firstSpecializationData: ICreateSpecializationDTO = {
			area_id: 1,
			description: 'especializado em tecnologia malucaaaaaa',
		};

		const firstSpecialization = await createSpecializationService.execute(
			firstSpecializationData
		);

		const secondSpecializationData: ICreateSpecializationDTO = {
			area_id: 2,
			description: 'especializado em tecnologia normaaaal',
		};

		const secondSpecialization = await createSpecializationService.execute(
			secondSpecializationData
		);

		const findAll = await findSpecializationService.executeAll();

		expect(findAll?.length).toEqual(2);
	});
});
