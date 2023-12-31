import { Product } from "../product.model";
import { ProductRepository } from "../product.repository";

export const getAllProducts = (): Promise<Product[]> => {
  const productRepository = new ProductRepository();
  return productRepository.getAll();
};
