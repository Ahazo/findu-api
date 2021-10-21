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
import SkillRepository from '../../modules/freelancer/infra/typeorm/repositories/SkillRepository';
import ISkillRepository from '../../modules/freelancer/repositories/ISkillRepository';
import IAreaRepository from '../../modules/freelancer/repositories/IAreaRepository';
import AreaRepository from '../../modules/freelancer/infra/typeorm/repositories/AreaRepository';
import ISpecializationRepository from '../../modules/freelancer/repositories/ISpecializationRepository';
import SpecializationRepository from '../../modules/freelancer/infra/typeorm/repositories/SpecializationRepository';
import IBundleRepository from '../../modules/bundle/repositories/IBundleRepository';
import BundleRepository from '../../modules/bundle/infra/typeorm/repositories/BundleRepository';
import IBundleMediaRepository from '../../modules/bundle/repositories/IBundleMediaRepository';
import BundleMediaRepository from '../../modules/bundle/infra/typeorm/repositories/BundleMediaRepository';
import IBundleRelationRepository from '../../modules/bundle/repositories/IBundleRelationRepository';
import BundleRelationRepository from '../../modules/bundle/infra/typeorm/repositories/BundleRelationsRepository';
import IDeliveryAgreementRepository from '../../modules/order/repositories/IDeliveryAgreementRepository';
import DeliveryAgreementRepository from '../../modules/order/infra/typeorm/repositories/DeliveryAgreementRepository';
import IOrderRepository from '../../modules/order/repositories/IOrderRepository';
import OrderRepository from '../../modules/order/infra/typeorm/repositories/OrderRepository';
import IOrderLineRepository from '../../modules/order/repositories/IOrderLineRepository';
import OrderLineRepository from '../../modules/order/infra/typeorm/repositories/OrderLineRepository';
import IOrderStatusRepository from '../../modules/order/repositories/IOrderStatusRepository';
import OrderStatusRepository from '../../modules/order/infra/typeorm/repositories/OrderStatusRepository';

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

container.registerSingleton<IBundleRelationRepository>(
	'BundleRelationsRepository',
	BundleRelationRepository
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
