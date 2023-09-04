import { Product } from "../product.model";
import { ProductRepository } from "../product.repository";

export const getProduct = (productId: string): Promise<Product | null> => {
  const productRepository = new ProductRepository();
  return productRepository.get(parseInt(productId));
};
