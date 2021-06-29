import { Request, Response } from 'express';
import FindBrandService from '../../../services/Brand/FindBrandService';
import { container } from 'tsyringe';

import CreateBrandService from '../../../services/Brand/CreateBrandService';
import findBrandService from '../../../services/Brand/FindBrandService';

export default class BrandController {
  
  public async create(request: Request, response: Response): Promise<Response> {
    const brandData = request.body;

    console.log(brandData);

    if (!brandData) {
      return response.status(400).json({
        errorMessage: 'Invalid request'
      })
    }

    const createBrandService = container.resolve(CreateBrandService);
    const brand = await createBrandService.execute(brandData)

    return response.json(brand);
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    console.log(id);

    if (!+id) {
      return response.status(400).json({
        errorMessage: 'Invalid request'
      })
    }

    const findBrandService = container.resolve(FindBrandService);
    const brand = await findBrandService.byId(+id);

    return response.json(brand);
  }

  public async findByName(request: Request, response: Response): Promise<Response> {
    const { brand_name } = request.body;

    console.log("Brand....", brand_name);

    if (!brand_name) {
      return response.status(400).json({
        errorMessage: 'Invalid request'
      })
    }

    const findBrandService = container.resolve(FindBrandService);
    const brand = await findBrandService.byName(brand_name)

    return response.json(brand);
  }

}