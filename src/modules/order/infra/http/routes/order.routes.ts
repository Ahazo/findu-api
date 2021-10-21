import { Router } from 'express';

import DeliveryAgreementController from '../controllers/DeliveryAgreementController';
import OrderController from '../controllers/OrderController';
import OrderLineController from '../controllers/OrderLineController';
import OrderStatusController from '../controllers/OrderStatusController';

const orderRouter = Router();

const deliveryAgreementController = new DeliveryAgreementController();
const orderController = new OrderController();
const orderLineController = new OrderLineController();
const orderStatusController = new OrderStatusController();

orderRouter.post('/', orderController.create);
orderRouter.put('/', orderController.update);
orderRouter.get('/:id', orderController.findById);

orderRouter.post('/orderline/', orderLineController.create);
orderRouter.put('/orderline/', orderLineController.update);
orderRouter.get('/orderline/:id', orderLineController.findById);

orderRouter.post('/orderstatus/', orderStatusController.create);
orderRouter.put('/orderstatus/', orderStatusController.update);
orderRouter.get('/orderstatus/:id', orderStatusController.findById);

orderRouter.post('/deliveryagreement/', deliveryAgreementController.create);
orderRouter.put('/deliveryagreement/', deliveryAgreementController.update);
orderRouter.get('/deliveryagreement/:id', deliveryAgreementController.findById);

export default orderRouter;
