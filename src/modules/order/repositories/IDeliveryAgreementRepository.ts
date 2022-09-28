import ICreateDeliveryAgreementDTO from '../dtos/ICreateDeliveryAgreementDTO';
import DeliveryAgreement from '../infra/typeorm/entities/DeliveryAgreement';

export default interface IDeliveryAgreementRepository {
	create(data: ICreateDeliveryAgreementDTO): Promise<DeliveryAgreement>;
	save(data: DeliveryAgreement): Promise<DeliveryAgreement>;
	findById(id: string): Promise<DeliveryAgreement | undefined>;
}
