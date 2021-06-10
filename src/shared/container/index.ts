import { container } from 'tsyringe';

import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

import ICorporationRepository from '../../modules/corporation/repositories/ICorporationRepository';
import CorporationRepository from '../../modules/corporation/infra/typeorm/repositories/CorporationRepository';

import IEstablishmentRepository from '../../modules/establishment/repositories/IEstablishmentRepository';
import EstablishmentRepository from '../../modules/establishment/infra/typeorm/repositories/EstablishmentRepository';

import '../../modules/user/providers';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
)

container.registerSingleton<ICorporationRepository>(
  'CorporationRepository',
  CorporationRepository
)

container.registerSingleton<IEstablishmentRepository>(
  'EstablishmentRepository',
  EstablishmentRepository
)
