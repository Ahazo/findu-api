import IUserResponseDTO from '../../modules/user/dtos/IUserResponseDTO';
import User from '../../modules/user/infra/typeorm/entities/User';

export const userToResponse = (user: User): IUserResponseDTO => {
	const isUserFreelancerActive = user.freelancer?.status === 'active';
	const userData = {
		id: user.id,
		username: user.username,
		cpf: user.person.cpf,
		email: user.person.email,
		cellphone_number: user.person.cellphone_number,
		first_name: user.person.first_name,
		last_name: user.person.last_name,
		following_count: user.following_count,
		follower_count: user.follower_count,
		birth_date: user.person.birth_date,
		postal_code: user.person.address.postal_code,
		street: user.person.address.street,
		number: user.person.address.number,
		city: user.person.address.city,
		state: user.person.address.state,
		neighborhood: user.person.address.neighborhood,
		description: user.description,
		...(user.freelancer &&
			isUserFreelancerActive && {
				freelancer: {
					id: user.freelancer.id,
					title: user.freelancer.title,
					projects_count: user.freelancer.projects_count,
					open_to_work: user.freelancer.open_to_work,
				},
			}),
	};

	return userData;
};
