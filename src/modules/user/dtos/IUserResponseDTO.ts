export default interface IUserResponseDTO {
	id: string;
	username: string;
	cpf: string;
	email: string;
	cellphone_number: string;
	first_name: string;
	last_name: string;
	birth_date: Date;
	postal_code: string;
	street: string;
	number: number;
	city: string;
	state: string;
	neighborhood: string;
	description: string;
	following_count: number;
	follower_count: number;
	freelancer?: {
		id: string;
		title: string;
		projects_count: number;
		open_to_work: boolean;
	};
}
