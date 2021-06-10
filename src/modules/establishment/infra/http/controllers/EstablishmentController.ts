import { Request, Response } from 'express';
import { container } from 'tsyringe'; 

import FindEstablishmentById from '../../../services/FindEstablishmentByIdService';
import CreateEstablishmentService from '../../../services/CreateEstablishmentService';

export default class EstablishmentController {
  async createEstablishment(request: Request, response: Response) {
    const establishmentData = request.body;
    const createEstablishment = container.resolve(CreateEstablishmentService);
    const establishment = await createEstablishment.execute(establishmentData);

    return response.status(200).json({ establishment });
  }

  async findEstablishmentById(request: Request, response: Response) {
    const { id } = request.params;
    const findEstablishmentById = container.resolve(FindEstablishmentById);
    const establishment = await findEstablishmentById.execute(id);

    if (!establishment) {
      return response.status(500).json({
        message: 'Cant found establishment'
      });
    } 

    return response.status(200).json({ establishment });
  }
}

