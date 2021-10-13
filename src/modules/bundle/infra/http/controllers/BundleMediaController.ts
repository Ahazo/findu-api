import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBundleMediaService from '../../../services/bundleMedia/CreateBundleMediaService';
import FindBundleMediaService from '../../../services/bundleMedia/FindBundleMediaService';
import UpdateBundleMediaService from '../../../services/bundleMedia/UpdateBundleMediaService';

export default class BundleMediaController {
	async create(request: Request, response: Response): Promise<Response> {
		const bundleMediaData = request.body;
		const bundleMediaCreate = container.resolve(CreateBundleMediaService);
		const bundleMedia = await bundleMediaCreate.execute(bundleMediaData);

		if (!bundleMedia)
			response.status(500).json({
				message: 'There was an error creating new bundle media',
			});

		return response.status(200).json(bundleMedia);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const bundleMediaData = request.body;
		const bundleMediaUpdate = container.resolve(UpdateBundleMediaService);

		await bundleMediaUpdate.execute(bundleMediaData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findBundleMedia = container.resolve(FindBundleMediaService);
		const { id } = request.params;
		const bundleMedia = findBundleMedia.executeById(+id);

		return response.status(200).json(bundleMedia);
	}
}
