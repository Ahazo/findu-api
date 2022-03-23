import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBundleService from '../../../services/bundle/CreateBundleService';
import FindBundleService from '../../../services/bundle/FindBundleService';
import UpdateBundleService from '../../../services/bundle/UpdateBundleService';

export default class BundleController {
	async create(request: Request, response: Response): Promise<Response> {
		const bundleData = request.body;
		const createBundle = container.resolve(CreateBundleService);

		const bundle = await createBundle.execute(bundleData);

		if (!bundle)
			return response.status(400).json({
				message: 'There was an error creating your bundle.',
			});

		return response.status(200).json(bundle);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateBundle = container.resolve(UpdateBundleService);
		const bundleData = request.body;

		await updateBundle.execute(bundleData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findBundle = container.resolve(FindBundleService);
		const { id } = request.params;
		const bundle = await findBundle.executeById(+id);

		if (!bundle) {
			return response.status(500).json({
				message: 'Bundle ID not found',
			});
		}

		return response.status(200).json(bundle);
	}
}
