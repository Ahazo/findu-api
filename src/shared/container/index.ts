import { container } from 'tsyringe';

import FreelancerRepository from '../../modules/freelancer/infra/typeorm/repositories/FreelancerRepository';
import ProfessionalLevelRepository from '../../modules/freelancer/infra/typeorm/repositories/ProfessionalLevelRepository';
import IFreelancerRepository from '../../modules/freelancer/repositories/IFreelancerRepository';
import IProfessionalLevelRepository from '../../modules/freelancer/repositories/IProfessionalLevelRepository';
import InfluencerLevelRepository from '../../modules/user/infra/typeorm/repositories/InfluencerLevelRepository';
import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import IInfluencerLevelRepository from '../../modules/user/repositories/IInfluencerLevelRepository';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

import '../../modules/user/providers';

container.registerSingleton<IUserRepository>(
	'UsersRepository',
	UsersRepository
);

container.registerSingleton<IInfluencerLevelRepository>(
	'InfluencerLevelRepository',
	InfluencerLevelRepository
);

container.registerSingleton<IFreelancerRepository>(
	'FreelancerRepository',
	FreelancerRepository
);

container.registerSingleton<IProfessionalLevelRepository>(
	'ProfessionalLevelRepository',
	ProfessionalLevelRepository
);
