import { OrderItem } from "../orderItem.model";
import { OrderItemRepository } from "../orderItem.repository";

export const getOrderItem = (
  orderItemId: string,
): Promise<OrderItem | null> => {
  const orderItemRepository = new OrderItemRepository();
  return orderItemRepository.get(parseInt(orderItemId));
};
