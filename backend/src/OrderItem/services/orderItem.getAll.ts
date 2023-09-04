import { OrderItem } from "../orderItem.model";
import { OrderItemRepository } from "../orderItem.repository";

export const getAllOrderItems = (): Promise<OrderItem[]> => {
  const orderItemRepository = new OrderItemRepository();
  return orderItemRepository.getAll();
};
