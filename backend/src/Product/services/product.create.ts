import { Product } from "../product.model";
import { IProduct } from "../interfaces/product.interface";
import { ProductRepository } from "../product.repository";

export const createProduct = (product: IProduct): Promise<Product> => {
  const productRepository = new ProductRepository();
  return productRepository.create(product);
};
