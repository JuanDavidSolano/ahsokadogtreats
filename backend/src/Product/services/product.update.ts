import { Product } from "../../models";
import { IProduct } from "../interfaces/product.interface";
import { ProductRepository } from "../product.repository";

export const updateProduct = async (
  productId: string,
  body: Partial<IProduct>,
): Promise<string> => {
  const productRepository = new ProductRepository();

  return productRepository.update(parseInt(productId), body);
};
