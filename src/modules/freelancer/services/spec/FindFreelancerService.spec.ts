import ICreateInfluencerLevelDTO from '../../../user/dtos/ICreateInfluencerLevelDTO';
import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

describe('FindBy Freelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});

	it('should be able to find freelancer by freelancer id', async () => {
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
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
			level_id: 2,
			skill: {
				freelancer_id: 1,
				specialization_id: 1,
			},
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const result = await FindFreelancer.executeById(freelancer.id);

		expect(result).toEqual(freelancer);
	});

	it('should not be able to find freelancer by freelancer id', async () => {
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user_id: 1,
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
			level_id: 2,
			skill: {
				freelancer_id: 1,
				specialization_id: 1,
			},
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const result = await FindFreelancer.executeById(freelancer.id + 1);

		expect(result).toEqual(undefined);
	});
});
