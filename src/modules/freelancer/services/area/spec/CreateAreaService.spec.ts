import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import Area from '../../../infra/typeorm/entities/Area';
import FakeAreaRepository from '../../../repositories/fakes/FakeAreaRepository';
import CreateAreaService from '../CreateAreaService';

describe('CreateArea', () => {
	let fakeAreaRepository: FakeAreaRepository;
	let createAreaService: CreateAreaService;

	beforeEach(() => {
		fakeAreaRepository = new FakeAreaRepository();
		createAreaService = new CreateAreaService(fakeAreaRepository);
	});

	it('should be able to create area', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Area Description',
		};

		expect(await createAreaService.execute(areaData)).toBeInstanceOf(Area);
	});

	it('should not be able to create area with existing description', async () => {
		const area: ICreateAreaDTO = {
			description: 'Area Description',
		};

		await createAreaService.execute(area);

		const areaWithExistingDescription: ICreateAreaDTO = {
			description: 'Area Description',
		};

		await expect(
			createAreaService.execute(areaWithExistingDescription)
		).rejects.toBeInstanceOf(Error);
	});
});
