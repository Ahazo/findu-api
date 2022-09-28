export default interface ICreateOrderDTO {
	user_id: string;
	bundle_id: string;
	order_status_id: string;
	ahazo_tax: number;
	total_value: number;
}
