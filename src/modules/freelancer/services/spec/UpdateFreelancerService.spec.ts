import ICreateProfessionalLevelDTO from 'modules/freelancer/dtos/ICreateProfessionalLevelDTO';

import ICreateFreelancerDTO from '../../dtos/ICreateFreelancerDTO';
import Freelancer from '../../infra/typeorm/entities/Freelancer';
import FakeFreelancerRepository from '../../infra/typeorm/repositories/fakes/FakeFreelancerRepository';
import FakeProfessionalLevelRepository from '../../infra/typeorm/repositories/fakes/FakeProfessionalLevelRepository';
import CreateFreelancerService from '../CreateFreelancerService';
import FindFreelancerService from '../FindFreelancerService';
import CreateProfessionalLevelService from '../professionalLevel/CreateProfessionalLevelService';
import UpdateFreelancerService from '../UpdateFreelancerService';

let fakeFreelancerRepository: FakeFreelancerRepository;
let fakeProfessionalLevelRepository: FakeProfessionalLevelRepository;

describe('UpdateFreelancer', () => {
	beforeEach(() => {
		fakeFreelancerRepository = new FakeFreelancerRepository();
		fakeProfessionalLevelRepository = new FakeProfessionalLevelRepository();
	});
});

it('should be able to update work status', async () => {
	const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);
	const CreateFreelancer = new CreateFreelancerService(
		fakeFreelancerRepository
	);
	const CreateProfessionalLevel = new CreateProfessionalLevelService(
		fakeProfessionalLevelRepository
	);
	const UpdateFreelancer = new UpdateFreelancerService(
		fakeFreelancerRepository
	);
	const levelData: ICreateProfessionalLevelDTO = {
		description: 'Almost Professional Mighty',
		experience_needed: 1,
	};

	const level = await CreateProfessionalLevel.execute(levelData);

	const freelancerData: ICreateFreelancerDTO = {
		user: {
			person: {
				address: {
					postal_code: '05638-060',
					street: 'Rua Gabriel Antunes',
					house_number: 4,
					complement: 'na frente do poster de um cara gostoso',
					city: 'Sao Paulo',
					state: 'SP',
				},
				cpf: '493.726.168-18',
				email: 'scarano.dev@gmail.com',
				cellphone_number: '(11) 97801-3866',
				first_name: 'Lucca',
				last_name: 'Scarano',
				birth_date: new Date(),
			},
			username: 'scaralu',
			password: 'AndreGostoso767!!',
			level_id: level.id,
		},
		projects_counter: 5,
		open_to_work: true,
		level: levelData,
		experience: 0,
	};

	const freelancer = await CreateFreelancer.execute(freelancerData);

	const updatedFreelancer = await UpdateFreelancer.execute({
		freelancerId: freelancer.id,
		open_to_work: false,
	});

	expect(updatedFreelancer).toBeInstanceOf(Freelancer);
	expect(updatedFreelancer.open_to_work).toBe(false);

	it('should be able to update skills', async () => {
		const FindFreelancer = new FindFreelancerService(fakeFreelancerRepository);

		const CreateFreelancer = new CreateFreelancerService(
			fakeFreelancerRepository
		);

		const CreateProfessionalLevel = new CreateProfessionalLevelService(
			fakeProfessionalLevelRepository
		);

		const UpdateFreelancer = new UpdateFreelancerService(
			fakeFreelancerRepository
		);

		const levelData: ICreateInfluencerLevelDTO = {
			description: 'Almost Mighty',
			experience_needed: 1,
		};

		const level = await CreateProfessionalLevel.execute(levelData);

		const freelancerData: ICreateFreelancerDTO = {
			user: {
				person: {
					address: {
						postal_code: '05638-060',
						street: 'Rua Gabriel Antunes',
						house_number: 4,
						complement: 'na frente do poster de um cara gostoso',
						city: 'Sao Paulo',
						state: 'SP',
					},
					cpf: '493.726.168-18',
					email: 'scarano.dev@gmail.com',
					cellphone_number: '(11) 97801-3866',
					first_name: 'Lucca',
					last_name: 'Scarano',
					birth_date: new Date(),
				},
				username: 'scaralu',
				password: 'AndreGostoso767!!',
				level_id: level.id,
			},
			projects_counter: 5,
			open_to_work: true,
			level: levelData,
			experience: 0,
		};

		const freelancer = await CreateFreelancer.execute(freelancerData);

		const updatedFreelancer = await UpdateFreelancer.execute({
			freelancerId: freelancer.id,
			skill: 'Plantar bananeira',
		});

		expect(updatedFreelancer).toBeInstanceOf(Freelancer);
		expect(updatedFreelancer.skill).toBe('Plantar bananeira');
	});
});
