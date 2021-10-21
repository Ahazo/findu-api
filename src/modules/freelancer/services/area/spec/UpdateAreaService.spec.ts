import ICreateAreaDTO from '../../../dtos/ICreateAreaDTO';
import FakeAreaRepository from '../../../repositories/fakes/FakeAreaRepository';
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
		const areaData: ICreateAreaDTO = {
			description: 'Area Description',
		};

		const area = await createAreaService.execute(areaData);

		const updatedArea = await updateAreaService.execute({
			...area,
			description: 'Updated Area Description',
		});

		expect(updatedArea.description).toEqual('Updated Area Description');
	});

	it('should not be able update to an existent area description', async () => {
		const areaData: ICreateAreaDTO = {
			description: 'Area Description',
		};

		const secondAreaData: ICreateAreaDTO = {
			description: 'Different Area Description',
		};

		await createAreaService.execute(areaData);

		const areaWithExistentDescription = await createAreaService.execute(
			secondAreaData
		);

		await expect(
			updateAreaService.execute({
				...areaWithExistentDescription,
				description: 'Area Description',
			})
		).rejects.toBeInstanceOf(Error);
	});
});
