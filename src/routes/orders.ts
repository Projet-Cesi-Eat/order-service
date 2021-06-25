import express from 'express';
import { Request, Response, NextFunction } from 'express'

import { OrdersServices } from '../controllers/ordersController';

const router = express.Router();
const orderServices = new OrdersServices

/* GET all orders listing. */
router.get('/all', function (req: Request, res: Response, next: NextFunction) {
  orderServices.getAllOrders()
    .then((orders) => res.status(200).json({orders}))
    .catch((error) => res.status(400).json({error}))
});

 /**
 * GET one order listing ✅
 */
  router.get('/one/', function (req: Request, res: Response, next: NextFunction) {
    const id = req.query.orderId;
    orderServices
      .getOneOrder(id)
      .then((orders) => res.status(200).json({ orders : orders}))
      .catch((error) => res.status(400).json({ error }));
  }); 

module.exports = router;
