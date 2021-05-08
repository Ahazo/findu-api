import { container } from 'tsyringe';

import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)