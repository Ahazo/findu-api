import Area from 'modules/freelancer/infra/typeorm/entities/Area';

import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import FakeAreaRepository from '../../../infra/typeorm/repositories/fakes/FakeAreaRepository';
import CreateAreaService from '../CreateAreaService';
import UpdateAreaService from '../UpdateAreaService';

describe('UpdateArea', () => {
	let fakeAreaRepository: FakeAreaRepository;

	let createAreaService: CreateAreaService;
	let updateAreaService: UpdateAreaService;

	beforeEach(() => {
		fakeAreaRepository = new FakeAreaRepository();

		createAreaService = new CreateAreaService(fakeAreaRepository);
		updateAreaService = new UpdateAreaService(fakeAreaRepository);
	});

	it('should be able to update area', async () => {
		const areaData1: ICreateAreaDTO = {
			description: 'papirologia',
		};

		const area1 = await createAreaService.execute(areaData1);

		const updatedArea = await updateAreaService.execute({
			...area1,
			id: area1.id,
			description: 'aa',
		});

		expect(updatedArea.description).toEqual('aa');
	});
});
