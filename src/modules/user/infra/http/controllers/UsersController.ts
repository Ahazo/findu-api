import { Request, Response } from 'express';
import { container } from 'tsyringe'; 

import FindUserService from '../../../services/FindUserService';
import CreateUserService from '../../../services/CreateUserService';

export default class UsersController {
  async createUser(request: Request, response: Response) {
    const userData = request.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute(userData);

    return response.status(200).json({ user });
  }

  async findUser(request: Request, response: Response) {
    const token = request.headers.authorization;

    if (!token) {
      return response.status(400).json({
        errorMessage: "Token needed",
      })
    }

    const findUSer = container.resolve(FindUserService);
    const user = await findUSer.execute(token);
    response.status(201).json(user);
  }
}

