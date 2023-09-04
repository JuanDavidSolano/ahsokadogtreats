import { DeleteResult } from "typeorm";
import dataSource from "../config/database";
import { OrderItem } from "./orderItem.model";
import { IOrderItem } from "./interfaces/orderItem.interface";

export class OrderItemRepository {
  orderItemRepository = dataSource.getRepository(OrderItem);

  async create(orderItem: IOrderItem): Promise<OrderItem> {
    return await this.orderItemRepository.save(orderItem);
  }

  async get(orderItemId: number): Promise<OrderItem | null> {
    return await this.orderItemRepository.findOneBy({ id: orderItemId });
  }

  async getAll(): Promise<OrderItem[]> {
    return await this.orderItemRepository.find();
  }

  async update(
    orderItemId: number,
    body: Partial<IOrderItem>,
  ): Promise<string> {
    const orderItem = await this.orderItemRepository.findOneBy({
      id: orderItemId,
    });
    if (orderItem) {
      this.orderItemRepository.merge(orderItem, body);
      const result = await this.orderItemRepository.save(orderItem);

      return result ? "OrderItem updated" : "Error during updating process";
    } else {
      return "Error during updating process";
    }
  }

  async delete(orderItemId: number): Promise<DeleteResult> {
    return this.orderItemRepository.delete(orderItemId);
  }
}
