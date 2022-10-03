import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrderLineService from '../../../services/orderLine/CreateOrderLineService';
import FindOrderLineService from '../../../services/orderLine/FindOrderLineService';
import UpdateOrderLineService from '../../../services/orderLine/UpdateOrderLineService';

export default class OrderLineController {
	async create(request: Request, response: Response): Promise<Response> {
		const orderLineData = request.body;
		const createOrderLine = container.resolve(CreateOrderLineService);

		const orderLine = await createOrderLine.execute(orderLineData);

		if (!orderLine)
			response.status(400).json({
				message: 'There was an error creating new order line',
			});

		return response.status(200).json(orderLine);
	}

	async update(request: Request, response: Response): Promise<Response> {
		const orderLineData = request.body;
		const updateOrderLine = container.resolve(UpdateOrderLineService);

		await updateOrderLine.execute(orderLineData);

		return response.status(204).send();
	}

	async findById(request: Request, response: Response): Promise<Response> {
		const findOrderLine = container.resolve(FindOrderLineService);
		const { id } = request.params;

		const find = await findOrderLine.executeById(id);

		if (!find) {
			response.status(500).json({
				message: 'Order Line ID not found',
			});
		}

		return response.status(200).json(find);
	}
}
