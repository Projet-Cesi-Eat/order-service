import express from 'express';
import { Request, Response, NextFunction } from 'express'

import { OrdersServices } from '../Controllers/ordersController';

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

/**
 * Create new restaurant ✅
 */
router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  orderServices
    .createOrder(req.body)
    .then((order) => res.status(201).json({ order }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Update one restaurant ✅
 */
router.put('/', function (req: Request, res: Response, next: NextFunction) {
  const id = req.query.id;
  orderServices
    .updateOrder(id, req.body)
    .then((order) => res.status(201).json({ order }))
    .catch((error) => res.status(400).json({ error }));
});

/**
 * Delete one restaurant ✅
 */
router.delete('/', function (req: Request, res: Response, next: NextFunction) {
  const id = req.query.id;
  orderServices
    .deleteOrder(id)
    .then(() => res.status(201).json('Order has been deleted'))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
