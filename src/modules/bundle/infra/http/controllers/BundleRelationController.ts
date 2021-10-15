import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateBundleRelationsService from '../../../services/bundleRelations/CreateBundleRelationsService';
import FindBundleRelationsService from '../../../services/bundleRelations/FindBundleRelationsService';
import UpdateBundleRelationsService from '../../../services/bundleRelations/UpdateBundleRelationsService';

export default class BundleRelationController {
	async create(request: Request, response: Response): Promise<Response> {
		const bundleRelationData = request.body;
		const createBundleRelation = container.resolve(
			CreateBundleRelationsService
		);

		const bundleRelation = await createBundleRelation.execute(
			bundleRelationData
		);

		if (!bundleRelation)
			response.status(400).json({
				message: 'There was an error creating new bundle relation',
			});

		return response.status(200).json(bundleRelation);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const bundleRelationData = request.body;
		const updateBundleRelation = container.resolve(
			UpdateBundleRelationsService
		);

		await updateBundleRelation.execute(bundleRelationData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findBundleRelation = container.resolve(FindBundleRelationsService);
		const { id } = request.params;
		const bundleRelation = await findBundleRelation.executeById(+id);

		if (!bundleRelation) {
			response.status(500).json({
				message: 'Bundle Relation ID not found',
			});
		}

		return response.status(200).json(bundleRelation);
	}
}
