import User from '../../../modules/user/infra/typeorm/entities/User';

interface IUserWithoutPassword extends User {
	password?: string;
}

export IUserWithoutPassword;
