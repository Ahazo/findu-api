import { container } from 'tsyringe';

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
