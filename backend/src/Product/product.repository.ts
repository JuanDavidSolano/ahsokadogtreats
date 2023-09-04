import { DeleteResult } from "typeorm";
import dataSource from "../config/database";
import { Product } from "./product.model";
import { IProduct } from "./interfaces/product.interface";

export class ProductRepository {
  productRepository = dataSource.getRepository(Product);

  async create(product: IProduct): Promise<Product> {
    return await this.productRepository.save(product);
  }

  async get(productId: number): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id: productId });
  }

  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async update(productId: number, body: Partial<IProduct>): Promise<string> {
    const product = await this.productRepository.findOneBy({ id: productId });
    if (product) {
      this.productRepository.merge(product, body);
      const result = await this.productRepository.save(product);

      return result ? "Product updated" : "Error during updating process";
    } else {
      return "Error during updating process";
    }
  }

  async delete(productId: number): Promise<DeleteResult> {
    return this.productRepository.delete(productId);
  }
}
