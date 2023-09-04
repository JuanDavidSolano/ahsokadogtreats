import { OrderItemRepository } from "../orderItem.repository";

export const deleteOrderItem = async (orderItemId: string): Promise<string> => {
  const orderItemRepository = new OrderItemRepository();
  const result = await orderItemRepository.delete(parseInt(orderItemId));
  if (result.affected && result.affected > 0) return "OrderItem deleted";
  return "Problem during deletion of orderItem";
};
