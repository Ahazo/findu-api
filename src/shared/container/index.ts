import { container } from 'tsyringe';

import AreaRepository from '../../modules/freelancer/infra/typeorm/repositories/AreaRepository';
import BundleMediaRepository from '../../modules/freelancer/infra/typeorm/repositories/bundle/BundleMediaRepository';
import BundleRepository from '../../modules/freelancer/infra/typeorm/repositories/bundle/BundleRepository';
import FreelancerRepository from '../../modules/freelancer/infra/typeorm/repositories/FreelancerRepository';
import ProfessionalLevelRepository from '../../modules/freelancer/infra/typeorm/repositories/ProfessionalLevelRepository';
import SkillRepository from '../../modules/freelancer/infra/typeorm/repositories/SkillRepository';
import SpecializationRepository from '../../modules/freelancer/infra/typeorm/repositories/SpecializationRepository';
import IBundleMediaRepository from '../../modules/freelancer/repositories/bundle/IBundleMediaRepository';
import IBundleRepository from '../../modules/freelancer/repositories/bundle/IBundleRepository';
import IAreaRepository from '../../modules/freelancer/repositories/IAreaRepository';
import IFreelancerRepository from '../../modules/freelancer/repositories/IFreelancerRepository';
import IProfessionalLevelRepository from '../../modules/freelancer/repositories/IProfessionalLevelRepository';
import ISkillRepository from '../../modules/freelancer/repositories/ISkillRepository';
import ISpecializationRepository from '../../modules/freelancer/repositories/ISpecializationRepository';
import DeliveryAgreementRepository from '../../modules/order/infra/typeorm/repositories/DeliveryAgreementRepository';
import OrderLineRepository from '../../modules/order/infra/typeorm/repositories/OrderLineRepository';
import OrderRepository from '../../modules/order/infra/typeorm/repositories/OrderRepository';
import OrderStatusRepository from '../../modules/order/infra/typeorm/repositories/OrderStatusRepository';
import IDeliveryAgreementRepository from '../../modules/order/repositories/IDeliveryAgreementRepository';
import IOrderLineRepository from '../../modules/order/repositories/IOrderLineRepository';
import IOrderRepository from '../../modules/order/repositories/IOrderRepository';
import IOrderStatusRepository from '../../modules/order/repositories/IOrderStatusRepository';
import InfluencerLevelRepository from '../../modules/user/infra/typeorm/repositories/InfluencerLevelRepository';
import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRespository';
import BcryptHashProvider from '../../modules/user/providers/implementations/BcryptHashProvider';
import IHashProvider from '../../modules/user/providers/models/IHashProvider';
import IInfluencerLevelRepository from '../../modules/user/repositories/IInfluencerLevelRepository';
import IUserRepository from '../../modules/user/repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
	'UsersRepository',
	UsersRepository
);

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);

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

container.registerSingleton<IOrderLineRepository>(
	'OrderLineRepository',
	OrderLineRepository
);

container.registerSingleton<IOrderStatusRepository>(
	'OrderStatusRepository',
	OrderStatusRepository
);
