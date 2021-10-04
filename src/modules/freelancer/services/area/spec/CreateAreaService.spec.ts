import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import Area from '../../../infra/typeorm/entities/Area';
import FakeAreaRepository from '../../../infra/typeorm/repositories/fakes/FakeAreaRepository';
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
			description: 'Ideologia assincrona',
		};

		expect(await createAreaService.execute(areaData)).toBeInstanceOf(Area);
	});
});
