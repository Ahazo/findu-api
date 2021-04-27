import { Request, Response } from 'express';
import { container } from 'tsyringe'; 

import CreateUserService from '../../../services/CreateUserService';

export default class UsersController {
  async createUser(request: Request, response: Response) {
    const userData = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(userData);

    return response.status(204).json({ user });
  }
}

