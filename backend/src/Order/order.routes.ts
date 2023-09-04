import express from "express";
import OrderController from "./order.controller";

const router = express.Router();

router.get("/:orderId", async (req, res) => {
  const controller = new OrderController();
  const response = await controller.getOrder(req.params.orderId);
  return res.send(response);
});

router.get("/", async (_req, res) => {
  const controller = new OrderController();
  const response = await controller.getOrders();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new OrderController();
  const response = await controller.addOrder(req.body);
  return res.send(response);
});

router.patch("/:orderId", async (req, res) => {
  const controller = new OrderController();
  const response = await controller.updateOrder(req.params.orderId, req.body);
  return res.send(response);
});

router.delete("/:orderId", async (req, res) => {
  const controller = new OrderController();
  const response = await controller.deleteOrder(req.params.orderId);
  return res.send(response);
});

export default router;
