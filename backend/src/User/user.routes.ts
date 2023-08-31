import express from "express";
import UserController from "./user.controller";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.userId);
  return res.send(response);
});

router.get("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new UserController();
  const response = await controller.addUser(req.body);
  return res.send(response);
});

router.patch("/:userId", async (req, res) => {
  const controller = new UserController();
  const response = await controller.updateUser(req.params.userId, req.body);
  return res.send(response);
});

router.delete("/:userId", async (req, res) => {
  const controller = new UserController();
  const response = await controller.deleteUser(req.params.userId);
  return res.send(response);
});

export default router;
