import { Order } from "../order.model";
import { OrderRepository } from "../order.repository";

export const getOrder = (orderId: string): Promise<Order | null> => {
  const orderRepository = new OrderRepository();
  return orderRepository.get(parseInt(orderId));
};
