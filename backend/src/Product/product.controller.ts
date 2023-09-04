import { Body, Delete, Get, Path, Post, Patch, Route, Tags } from "tsoa";
import { IProduct } from "./interfaces/product.interface";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./product.service";
import { Product } from "./product.model";

@Tags("Product")
@Route("product")
export default class ProductController {
  @Post("/")
  public addProduct(@Body() body: IProduct): Promise<Product> {
    return createProduct(body);
  }

  @Get("/:productId")
  public getProduct(@Path() productId: string): Promise<Product | null> {
    return getProduct(productId);
  }

  @Get("/")
  public getProducts(): Promise<Product[]> {
    return getAllProducts();
  }

  @Patch("/:productId")
  public async updateProduct(
    @Path() productId: string,
    @Body() body: Partial<IProduct>,
  ): Promise<string> {
    return updateProduct(productId, body);
  }

  @Delete("/:productId")
  public deleteProduct(@Path() productId: string): Promise<string> {
    return deleteProduct(productId);
  }
}
