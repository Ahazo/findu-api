import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBundleMediaService from '../../../../services/bundle/bundleMedia/CreateBundleMediaService';
import DeleteBundleMediaService from '../../../../services/bundle/bundleMedia/DeleteBundleMediaService';

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

	async delete(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;
			const bundleMediaDelete = container.resolve(DeleteBundleMediaService);
			await bundleMediaDelete.execute(id);
			return response.status(204);
		} catch (err: any) {
			return response.status(400).json({
				message: err.message,
			});
		}
	}
}
