import { injectable, inject } from 'tsyringe';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';


@injectable()
export default class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) { }

  public async execute(userData: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create(userData);
    return user;
  }
}