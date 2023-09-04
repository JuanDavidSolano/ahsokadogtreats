import express from "express";
import OrderItemController from "./orderItem.controller";

const router = express.Router();

router.get("/:orderItemId", async (req, res) => {
  const controller = new OrderItemController();
  const response = await controller.getOrderItem(req.params.orderItemId);
  return res.send(response);
});

router.get("/", async (_req, res) => {
  const controller = new OrderItemController();
  const response = await controller.getOrderItems();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new OrderItemController();
  const response = await controller.addOrderItem(req.body);
  return res.send(response);
});

router.patch("/:orderItemId", async (req, res) => {
  const controller = new OrderItemController();
  const response = await controller.updateOrderItem(
    req.params.orderItemId,
    req.body,
  );
  return res.send(response);
});

router.delete("/:orderItemId", async (req, res) => {
  const controller = new OrderItemController();
  const response = await controller.deleteOrderItem(req.params.orderItemId);
  return res.send(response);
});

export default router;
