import { Schema, model, ObjectId} from 'mongoose';
import mongoose from 'mongoose';

export interface OrdersInterface{
  _id: string,
  restId: string,
  clientId: number,
  orderContent: Array<Array<any>>,
  orderTime: Date
}

const ordersSchema = new Schema<OrdersInterface>({
  restId: {type: String, required: true},
  clientId: {type: Number, required: true},
  orderContent: {type: Array, required: true},
},
{timestamps: {createdAt: 'orderTime', updatedAt: false} }
)

export default model<OrdersInterface>('orders', ordersSchema)