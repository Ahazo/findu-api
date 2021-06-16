import { Request, Response } from 'express';
import { container } from 'tsyringe'; 

import findEstablishmentService from '../../../services/FindEstablishmentService';
import CreateEstablishmentService from '../../../services/CreateEstablishmentService';
import FindEstablishmentByIdService from '../../../services/FindEstablishmentService';

export default class EstablishmentController {
  async createEstablishment(request: Request, response: Response) {
    const establishmentData = request.body;
    const createEstablishment = container.resolve(CreateEstablishmentService);
    const establishment = await createEstablishment.execute(establishmentData);

    return response.status(200).json({ establishment });
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const findEstablishment = container.resolve(FindEstablishmentByIdService);
    const establishment = await findEstablishment.executeById(id);

    if (!establishment) {
      return response.status(500).json({
        message: 'Cant found establishment'
      });
    } 

    return response.status(200).json({ establishment });
  }

  async findByName(request: Request, response: Response) {
    const { establishment_name } = request.params;
    const findEstablishment = container.resolve(FindEstablishmentByIdService);
    const establishment = await findEstablishment.executeByName(establishment_name);

    if (!establishment) {
      return response.status(500).json({
        message: 'Cant found establishment'
      });
    } 

    return response.status(200).json({ establishment });
  }
}

