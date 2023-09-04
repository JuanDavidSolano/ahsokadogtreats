import { DeleteResult } from "typeorm";
import dataSource from "../config/database";
import { Order } from "./order.model";
import { IOrder } from "./interfaces/order.interface";

export class OrderRepository {
  orderRepository = dataSource.getRepository(Order);

  async create(order: IOrder): Promise<Order> {
    return await this.orderRepository.save(order);
  }

  async get(orderId: number): Promise<Order | null> {
    return await this.orderRepository.findOneBy({ id: orderId });
  }

  async getAll(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async update(orderId: number, body: Partial<IOrder>): Promise<string> {
    const order = await this.orderRepository.findOneBy({ id: orderId });
    if (order) {
      this.orderRepository.merge(order, body);
      const result = await this.orderRepository.save(order);

      return result ? "Order updated" : "Error during updating process";
    } else {
      return "Error during updating process";
    }
  }

  async delete(orderId: number): Promise<DeleteResult> {
    return this.orderRepository.delete(orderId);
  }
}
