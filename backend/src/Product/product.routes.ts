import express from "express";
import ProductController from "./product.controller";

const router = express.Router();

router.get("/:productId", async (req, res) => {
  const controller = new ProductController();
  const response = await controller.getProduct(req.params.productId);
  return res.send(response);
});

router.get("/", async (_req, res) => {
  const controller = new ProductController();
  const response = await controller.getProducts();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ProductController();
  const response = await controller.addProduct(req.body);
  return res.send(response);
});

router.patch("/:productId", async (req, res) => {
  const controller = new ProductController();
  const response = await controller.updateProduct(
    req.params.productId,
    req.body,
  );
  return res.send(response);
});

router.delete("/:productId", async (req, res) => {
  const controller = new ProductController();
  const response = await controller.deleteProduct(req.params.productId);
  return res.send(response);
});

export default router;
