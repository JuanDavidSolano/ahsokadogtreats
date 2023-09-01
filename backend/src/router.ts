import express from "express";
import UserRouter from "./User/user.routes";
import ClientRouter from "./Client/client.routes";

const router = express.Router({ mergeParams: true });

router.use("/user", UserRouter);
router.use("/client", ClientRouter);

export default router;
