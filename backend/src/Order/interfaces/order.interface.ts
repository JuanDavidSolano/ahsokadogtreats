import { IOrderItem } from "../../OrderItem/interfaces/orderItem.interface";
import { PayMethodType } from "../../Utils/payMetod.type";

export interface IOrder {
  userId: number;
  clientId: number;
  address: string;
  items: IOrderItem[];
  payMethod: PayMethodType;
}
