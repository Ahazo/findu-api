import { Request, Response } from 'express';
import { container } from 'tsyringe'; 

import CreateCorporationService from '../../../services/CreateCorporationService';
import FindCorporationByIdService from '../../../services/FindCorporationByIdService';

export default class CorporationController {
  async createCorporation(request: Request, response: Response) {
    const establishmentData = request.body;
    const createCorporation = container.resolve(CreateCorporationService);
    const establishment = await createCorporation.execute(establishmentData);

    return response.status(200).json({ establishment });
  }

  async findCorporationById(request: Request, response: Response) {
    const { id } = request.params;
    const findCorporationById = container.resolve(FindCorporationByIdService);
    const corporation = await findCorporationById.execute(id);

    if (!corporation) {
      return response.status(500).json({
        message: 'Cant found corporation'
      });
    } 

    return response.status(200).json({ corporation });
  }
}

