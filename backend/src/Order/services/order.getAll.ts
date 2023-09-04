import { Order } from "../order.model";
import { OrderRepository } from "../order.repository";

export const getAllOrders = (): Promise<Order[]> => {
  const orderRepository = new OrderRepository();
  return orderRepository.getAll();
};
