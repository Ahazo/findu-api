import { getRepository, Repository } from 'typeorm';

import User from '../../entities/User';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

class MockUserRepository implements IUserRepository {
  private mockUserRepository:Repository<User>;

  constructor() {
    this.mockUserRepository = getRepository(User);
  }

  public async create(userData: ICreateUserDTO):Promise<User> {
    const user = this.mockUserRepository.create(userData);
    await this.mockUserRepository.save(user);
    return user;
  }
  

  public async save(user:User):Promise<User> {
    return await this.mockUserRepository.save(user);
  }
}

export default MockUserRepository;