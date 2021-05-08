import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

import { generateToken } from '../../../shared/utils/generateToken';

interface IResponse {
  user: User,
  token: string,
}

interface IRequestBody {
  username: string,
  password: string,
}

@injectable()
class AuthenticatUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ username, password }: IRequestBody): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new Error('usuário não encontrado')
    }

    const token = generateToken(user.id);
    
    return {
      user,
      token
    }
  }
}

export default AuthenticatUserService;