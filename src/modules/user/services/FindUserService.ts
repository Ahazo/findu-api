import { injectable, inject } from 'tsyringe';
import jwt, { verify } from 'jsonwebtoken';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';
import auth from '../../../config/auth';

interface ITokenPayload {
  id: number;
  iat: number;
  exp: number;
}

@injectable()
export default class FindUserService {
  constructor (
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute(token: string): Promise<User | undefined> {
    const decoded = verify(token, auth.jwt.secret);
    const { id } = decoded as ITokenPayload
    
    const user = await this.usersRepository.findById(id);
    return user;
  }
}
