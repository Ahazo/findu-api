import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderService from '../../../services/order/CreateOrderService';
import FindOrderService from '../../../services/order/FindOrderService';
import UpdateOrderService from '../../../services/order/UpdateOrderService';

export default class OrderController {
	async create(request: Request, response: Response): Promise<Response> {
		const orderData = request.body;
		const orderCreate = container.resolve(CreateOrderService);

		const order = await orderCreate.execute(orderData);

		if (!order)
			response.status(400).json({
				message: 'There was an error creating new order',
			});

		return response.status(200).json(order);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const orderData = request.body;
		const orderUpdate = container.resolve(UpdateOrderService);

		await orderUpdate.execute(orderData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findOrder = container.resolve(FindOrderService);
		const { id } = request.params;

		const find = findOrder.executeById(id);

		if (!find) {
			response.status(500).json({
				message: 'Order ID not found',
			});
		}

		return response.status(200).json(find);
	}
}
