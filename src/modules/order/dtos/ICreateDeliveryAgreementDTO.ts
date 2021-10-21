export default interface ICreateDeliveryAgreementDTO {
	user_id: number;
	order_id: number;
	status: 'accepted' | 'refused';
}
