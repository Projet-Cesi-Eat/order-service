  
import orderModel, { OrdersInterface } from '../Schema/orderSchema'

export class OrdersServices {
  
  public getAllOrders<OrdersInterface>() {
    return new Promise<OrdersInterface>((resolve, reject) => {
        orderModel.find((err: Error, orders: OrdersInterface) => {
        if (err) {
          reject(err);
        } else {
          resolve(orders);
        }
      })
    })
  }

 /**
   * GET one order ✅
   */
  public getOneOrder<OrdersInterface>(id: any) {
    return new Promise<OrdersInterface>((resolve, reject) => {
      orderModel.findById(
        id,
        (err: Error, orders: OrdersInterface) => {
          if (err) {
            reject(err);
          } else {
            resolve(orders);
          }
        }
      );
    });
  }
    /**
   * CREATE a new order ✅
   */
  public createOrder<OrdersInterface>(body: any) {
    const newOrder = new orderModel({
      restId: body.restId,
      clientId: body.clientId,
      orderContent: body.orderContent
    });

    return new Promise<OrdersInterface>((resolve, reject) => {
      newOrder.save((err, order: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(order);
        }
      });
    });
  }

  /**
   * UPDATE order ✅
   */
  public updateOrder<OrdersInterface>(id: any, body: any) {
    return new Promise<OrdersInterface>((resolve, reject) => {
      orderModel.findByIdAndUpdate(
        id,
        body,
        (err: any, order: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(order);
          }
        }
      );
    });
  }

  /**
   * DELETE one restaurant ✅
   */
  public deleteOrder<OrdersInterface>(id: any) {
    return new Promise<OrdersInterface>((resolve, reject) => {
      orderModel.findByIdAndDelete(
        id,
        { strict: false },
        (err: any, order: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(order);
          }
        }
      );
    });
  }
}


