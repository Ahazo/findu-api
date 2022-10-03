import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDeliveryAgreementService from '../../../services/deliveryAgreement/CreateDeliveryAgreementService';
import FindDeliveryAgreementService from '../../../services/deliveryAgreement/FindDeliveryAgreementService';
import UpdateDeliveryAgreementService from '../../../services/deliveryAgreement/UpdateDeliveryAgreementService';

export default class DeliveryAgreementController {
	async create(request: Request, response: Response): Promise<Response> {
		const deliveryData = request.body;

		const createDelivery = container.resolve(CreateDeliveryAgreementService);
		const delivery = createDelivery.execute(deliveryData);

		if (!delivery)
			response.status(400).json({
				message: 'There was an error creating new delivery agreement',
			});

		return response.status(200).json(delivery);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const updateDelivery = container.resolve(UpdateDeliveryAgreementService);
		const deliveryData = request.body;

		await updateDelivery.execute(deliveryData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findDelivery = container.resolve(FindDeliveryAgreementService);
		const { id } = request.params;
		const delivery = await findDelivery.executeById(id);

		if (!delivery) {
			response.status(500).json({
				message: 'Delivery ID not found',
			});
		}

		return response.status(200).json(delivery);
	}
}
