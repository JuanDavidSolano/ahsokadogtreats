import express from "express";
import PingController from "../controllers/ping";
import UserRouter from "../User/user.routes";

const router = express.Router({ mergeParams: true });

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/user", UserRouter);

export default router;
