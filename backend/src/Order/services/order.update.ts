import { Order } from "../order.model";
import { IOrder } from "../interfaces/order.interface";
import { OrderRepository } from "../order.repository";

export const updateOrder = async (
  orderId: string,
  body: Partial<IOrder>,
): Promise<string> => {
  const orderRepository = new OrderRepository();

  return orderRepository.update(parseInt(orderId), body);
};
