  
import orderModel, { OrdersInterface } from '../schema/orderSchema'

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
}

