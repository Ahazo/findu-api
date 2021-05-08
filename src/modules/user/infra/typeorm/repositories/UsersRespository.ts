import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

import IUserRepository from '../../../repositories/IUserRepository';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

class UsersRepository implements IUserRepository {
  private userRepository:Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create(userData: ICreateUserDTO):Promise<User> {
    const user = this.userRepository.create(userData);

    await this.userRepository.save(user)
    return user;
  }
  

  public async save(user:User):Promise<User> {
    return await this.userRepository.save(user)
  }
}

export default UsersRepository;