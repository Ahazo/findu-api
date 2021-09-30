import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import ICreateProfessionalLevelDTO from '../../dtos/ICreateProfessionalLevelDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

describe('CreateFreelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});

	it('should be able to create freelancer', async () => {
		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateProfessionalLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			// user: {
			// 	person: {
			// 		address: {
			// 			postal_code: '05638-060',
			// 			street: 'Rua Gabriel Antunes',
			// 			house_number: 4,
			// 			complement: 'na frente do poster de um cara gostoso',
			// 			city: 'Sao Paulo',
			// 			state: 'SP',
			// 		},
			// 		cpf: '493.726.168-18',
			// 		email: 'scarano.dev@gmail.com',
			// 		cellphone_number: '(11) 97801-3866',
			// 		first_name: 'Lucca',
			// 		last_name: 'Scarano',
			// 		birth_date: new Date(),
			// 	},
			// 	username: 'scaralu',
			// 	password: 'AndreGostoso767!!',
			// 	level_id: level.id,
			// },
			projects_counter: 5,
			open_to_work: true,
			level: levelData,
			experience: 0,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		expect(freelancer).toBeInstanceOf(Freelancer);
		expect(freelancer.level_id).toEqual(level.id);
	});
});
