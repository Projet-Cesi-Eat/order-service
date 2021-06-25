import { Schema, model } from 'mongoose';

export interface OrdersInterface{
  _id: string,
  restId: string,
  clientId: number,
  orderContent: Array<Array<any>>,
  orderTime: any
}

const ordersSchema = new Schema<OrdersInterface>({
  _id: {type: String, required: true},
  restId: {type: String, required: true},
  clientId: {type: Number, required: true},
  orderContent: {type: Array, required: true},
  orderTime: {type: String, required: true}
})

export default model<OrdersInterface>('orders', ordersSchema)