import express from "express";
import ClientController from "./client.controller";

const router = express.Router();

router.get("/:clientId", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.getClient(req.params.clientId);
  return res.send(response);
});

router.get("/", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.getClients();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.addClient(req.body);
  return res.send(response);
});

router.patch("/:clientId", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.updateClient(req.params.clientId, req.body);
  return res.send(response);
});

router.delete("/:clientId", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.deleteClient(req.params.clientId);
  return res.send(response);
});

export default router;
