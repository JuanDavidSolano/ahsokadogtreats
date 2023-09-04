import { OrderItem } from "../orderItem.model";
import { IOrderItem } from "../interfaces/orderItem.interface";
import { OrderItemRepository } from "../orderItem.repository";

export const createOrderItem = (orderItem: IOrderItem): Promise<OrderItem> => {
  const orderItemRepository = new OrderItemRepository();
  return orderItemRepository.create(orderItem);
};
