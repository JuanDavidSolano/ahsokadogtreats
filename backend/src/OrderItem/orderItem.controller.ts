import { Body, Delete, Get, Path, Post, Patch, Route, Tags } from "tsoa";
import { IOrderItem } from "./interfaces/orderItem.interface";
import {
  createOrderItem,
  deleteOrderItem,
  getAllOrderItems,
  getOrderItem,
  updateOrderItem,
} from "./orderItem.service";
import { OrderItem } from "./orderItem.model";

@Tags("OrderItem")
@Route("orderItem")
export default class OrderItemController {
  @Post("/")
  public addOrderItem(@Body() body: IOrderItem): Promise<OrderItem> {
    return createOrderItem(body);
  }

  @Get("/:orderItemId")
  public getOrderItem(@Path() orderItemId: string): Promise<OrderItem | null> {
    return getOrderItem(orderItemId);
  }

  @Get("/")
  public getOrderItems(): Promise<OrderItem[]> {
    return getAllOrderItems();
  }

  @Patch("/:orderItemId")
  public async updateOrderItem(
    @Path() orderItemId: string,
    @Body() body: Partial<IOrderItem>,
  ): Promise<string> {
    return updateOrderItem(orderItemId, body);
  }

  @Delete("/:orderItemId")
  public deleteOrderItem(@Path() orderItemId: string): Promise<string> {
    return deleteOrderItem(orderItemId);
  }
}
