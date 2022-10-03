import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderStatusService from '../../../services/orderStatus/CreateOrderStatusService';
import FindOrderStatusService from '../../../services/orderStatus/FindOrderStatusService';
import UpdateOrderStatusService from '../../../services/orderStatus/UpdateOrderStatusService';

export default class OrderStatusController {
	async create(request: Request, response: Response): Promise<Response> {
		const orderStatusData = request.body;
		const createOrderStatus = container.resolve(CreateOrderStatusService);

		const orderStatus = await createOrderStatus.execute(orderStatusData);

		if (!orderStatus)
			response.status(400).json({
				message: 'There was an error creating new order status',
			});

		return response.status(200).json(orderStatus);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const orderStatusData = request.body;
		const updateOrderStatus = container.resolve(UpdateOrderStatusService);

		await updateOrderStatus.execute(orderStatusData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findOrderStatus = container.resolve(FindOrderStatusService);
		const { id } = request.params;

		const orderStatus = findOrderStatus.executeById(id);

		if (!orderStatus) {
			response.status(500).json({
				message: 'Order Status ID not found',
			});
		}

		return response.status(200).json(orderStatus);
	}
}
