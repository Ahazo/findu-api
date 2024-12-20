import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
	create(data: ICreateUserDTO): Promise<User>;
	save(user: User): Promise<User>;
	findById(id: number): Promise<User | undefined>;
	findByUsername(username: string): Promise<User | undefined>;
}
