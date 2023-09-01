import { ProductRepository } from "../product.repository";

export const deleteProduct = async (productId: string): Promise<string> => {
  const productRepository = new ProductRepository();
  const result = await productRepository.delete(parseInt(productId));
  if (result.affected && result.affected > 0) return "Product deleted";
  return "Problem during deletion of product";
};
