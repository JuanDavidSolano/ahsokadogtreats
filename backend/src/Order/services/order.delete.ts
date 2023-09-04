import { OrderRepository } from "../order.repository";

export const deleteOrder = async (orderId: string): Promise<string> => {
  const orderRepository = new OrderRepository();
  const result = await orderRepository.delete(parseInt(orderId));
  if (result.affected && result.affected > 0) return "Order deleted";
  return "Problem during deletion of order";
};
