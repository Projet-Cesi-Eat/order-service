import express from 'express';
import { Request, Response, NextFunction } from 'express'

import { OrdersServices } from '../controllers/ordersController';

const router = express.Router();
const restServices = new OrdersServices

/* GET orders listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  restServices.getAllOrders()
    .then((orders) => res.status(200).json({orders: orders}))
    .catch((error) => res.status(400).json({error}))
});

module.exports = router;
