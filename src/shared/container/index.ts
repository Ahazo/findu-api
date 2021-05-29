import { container } from 'tsyringe';

import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

import '../../modules/user/providers';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)