  
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

}