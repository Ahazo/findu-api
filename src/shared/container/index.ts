import { container } from 'tsyringe';

import AreaRepository from '../../modules/freelancer/infra/typeorm/repositories/AreaRepository';
import BundleMediaRepository from '../../modules/freelancer/infra/typeorm/repositories/bundle/BundleMediaRepository';
import BundleRepository from '../../modules/freelancer/infra/typeorm/repositories/bundle/BundleRepository';
import FreelancerRepository from '../../modules/freelancer/infra/typeorm/repositories/FreelancerRepository';
import SkillRepository from '../../modules/freelancer/infra/typeorm/repositories/SkillRepository';
import SpecializationRepository from '../../modules/freelancer/infra/typeorm/repositories/SpecializationRepository';
import IBundleMediaRepository from '../../modules/freelancer/repositories/bundle/IBundleMediaRepository';
import IBundleRepository from '../../modules/freelancer/repositories/bundle/IBundleRepository';
import IAreaRepository from '../../modules/freelancer/repositories/IAreaRepository';
import IFreelancerRepository from '../../modules/freelancer/repositories/IFreelancerRepository';
import ISkillRepository from '../../modules/freelancer/repositories/ISkillRepository';
import ISpecializationRepository from '../../modules/freelancer/repositories/ISpecializationRepository';
import DeliveryAgreementRepository from '../../modules/order/infra/typeorm/repositories/DeliveryAgreementRepository';
import OrderRepository from '../../modules/order/infra/typeorm/repositories/OrderRepository';
import OrderStatusRepository from '../../modules/order/infra/typeorm/repositories/OrderStatusRepository';
import IDeliveryAgreementRepository from '../../modules/order/repositories/IDeliveryAgreementRepository';
import IOrderLineRepository from '../../modules/order/repositories/IOrderLineRepository';
import IOrderRepository from '../../modules/order/repositories/IOrderRepository';
import IOrderStatusRepository from '../../modules/order/repositories/IOrderStatusRepository';
import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import BcryptHashProvider from '../../modules/user/providers/implementations/BcryptHashProvider';
import IHashProvider from '../../modules/user/providers/models/IHashProvider';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
	'UsersRepository',
	UsersRepository
);

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);

container.registerSingleton<IFreelancerRepository>(
	'FreelancerRepository',
	FreelancerRepository
);

container.registerSingleton<IAreaRepository>('AreaRepository', AreaRepository);

container.registerSingleton<ISkillRepository>(
	'SkillRepository',
	SkillRepository
);

container.registerSingleton<ISpecializationRepository>(
	'SpecializationRepository',
	SpecializationRepository
);

container.registerSingleton<IBundleRepository>(
	'BundleRepository',
	BundleRepository
);

container.registerSingleton<IBundleMediaRepository>(
	'BundleMediaRepository',
	BundleMediaRepository
);

container.registerSingleton<IDeliveryAgreementRepository>(
	'DeliveryAgreementRepository',
	DeliveryAgreementRepository
);

container.registerSingleton<IOrderRepository>(
	'OrderRepository',
	OrderRepository
);

container.registerSingleton<IOrderStatusRepository>(
	'OrderStatusRepository',
	OrderStatusRepository
);
