import { IOrderItem } from "../../OrderItem/interfaces/orderItem.interface";
import { createOrderItem } from "../../OrderItem/orderItem.service";
import { Order } from "../order.model";
import { IOrder } from "../interfaces/order.interface";
import { OrderRepository } from "../order.repository";

export const createOrder = async (order: IOrder): Promise<Order> => {
  const orderRepository = new OrderRepository();
  const orderItems: IOrderItem[] = order.items;

  const orderResult = await orderRepository.create(order);

  orderItems.forEach((orderItem: IOrderItem) => {
    createOrderItem({ ...orderItem, orderId: orderResult.id });
  });

  return orderRepository.create(order);
};
