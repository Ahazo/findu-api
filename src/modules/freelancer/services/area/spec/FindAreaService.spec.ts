import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import FakeAreaRepository from '../../../infra/typeorm/repositories/fakes/FakeAreaRepository';
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
		const areaData: ICreateAreaDTO = {
			description: 'Airea aiaire',
		};

		const area = await createAreaService.execute(areaData);

		const find = await findAreaService.executeById(area.id);

		expect(find).toEqual(area);
	});

	it('should be able to find area by its name', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Airea aiaire',
		};

		const area = await createAreaService.execute(areaData);

		const find = await findAreaService.executeByName(area.description);

		expect(find).toEqual(area);
	});

	it('should not be able to find area by its wrong id', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Airea aiaire',
		};

		const area = await createAreaService.execute(areaData);

		const find = await findAreaService.executeById(area.id + 1);

		expect(find).toEqual(undefined);
	});

	it('should not be able to find area by its wrong name', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Airea aiaire',
		};

		const area = await createAreaService.execute(areaData);

		const find = await findAreaService.executeByName('aracnologia');

		expect(find).toEqual(undefined);
	});

	it('should be able to find all the areas', async () => {
		const firstAreaData: ICreateAreaDTO = {
			description: 'Aiaiairia',
		};

		await createAreaService.execute(firstAreaData);

		const secondAreaData: ICreateAreaDTO = {
			description: 'AAAAREmaria',
		};

		await createAreaService.execute(secondAreaData);

		const findAreas = await findAreaService.executeAll();

		expect(findAreas?.length).toEqual(2);
	});
});
