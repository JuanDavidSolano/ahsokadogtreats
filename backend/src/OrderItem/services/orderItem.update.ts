import { OrderItem } from "../orderItem.model";
import { IOrderItem } from "../interfaces/orderItem.interface";
import { OrderItemRepository } from "../orderItem.repository";

export const updateOrderItem = async (
  orderItemId: string,
  body: Partial<IOrderItem>,
): Promise<string> => {
  const orderItemRepository = new OrderItemRepository();

  return orderItemRepository.update(parseInt(orderItemId), body);
};
