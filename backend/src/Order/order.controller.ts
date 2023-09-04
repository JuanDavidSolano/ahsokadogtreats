import { Body, Delete, Get, Path, Post, Patch, Route, Tags } from "tsoa";
import { IOrder } from "./interfaces/order.interface";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "./order.service";
import { Order } from "./order.model";

@Tags("Order")
@Route("order")
export default class OrderController {
  @Post("/")
  public addOrder(@Body() body: IOrder): Promise<Order> {
    return createOrder(body);
  }

  @Get("/:orderId")
  public getOrder(@Path() orderId: string): Promise<Order | null> {
    return getOrder(orderId);
  }

  @Get("/")
  public getOrders(): Promise<Order[]> {
    return getAllOrders();
  }

  @Patch("/:orderId")
  public async updateOrder(
    @Path() orderId: string,
    @Body() body: Partial<IOrder>,
  ): Promise<string> {
    return updateOrder(orderId, body);
  }

  @Delete("/:orderId")
  public deleteOrder(@Path() orderId: string): Promise<string> {
    return deleteOrder(orderId);
  }
}
