import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import FakeAreaRepository from '../../../repositories/fakes/FakeAreaRepository';
import CreateAreaService from '../CreateAreaService';
import FindAreaService from '../FindAreaService';

describe('FindArea', () => {
	let fakeAreaRepository: FakeAreaRepository;
	let findAreaService: FindAreaService;
	let createAreaService: CreateAreaService;

	beforeEach(() => {
		fakeAreaRepository = new FakeAreaRepository();
		findAreaService = new FindAreaService(fakeAreaRepository);
		createAreaService = new CreateAreaService(fakeAreaRepository);
	});

	it('should be able to find area by its id', async () => {
		const area = await createAreaService.execute({
			description: 'Area Description',
		});

		expect(await findAreaService.executeById(area.id)).toEqual(area);
	});

	it('should be able to find area by its description', async () => {
		const area = await createAreaService.execute({
			description: 'Area Description',
		});

		expect(
			await findAreaService.executeByDescription(area.description)
		).toEqual(area);
	});

	it('should not be able to find area by its wrong id', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Area Description',
		};

		const area = await createAreaService.execute(areaData);

		const unexistentId = area.id + 1;

		const areaNotFound = await findAreaService.executeById(unexistentId);

		expect(areaNotFound).toEqual(undefined);
	});

	it('should not be able to find area by its wrong name', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Area Description',
		};

		await createAreaService.execute(areaData);

		expect(
			await findAreaService.executeByDescription('Wrong Area Description')
		).toBe(undefined);
	});

	it('should be able to find all areas', async () => {
		const firstAreaData: ICreateAreaDTO = {
			description: 'First Area Description',
		};

		await createAreaService.execute(firstAreaData);

		const secondAreaData: ICreateAreaDTO = {
			description: 'Second Area Description',
		};

		await createAreaService.execute(secondAreaData);

		const findAreas = await findAreaService.executeAll();

		expect(findAreas?.length).toEqual(2);
	});
});
