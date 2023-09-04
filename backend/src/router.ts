import express from "express";
import UserRouter from "./User/user.routes";
import ClientRouter from "./Client/client.routes";
import OrderItemRouter from "./OrderItem/orderItem.routes";
import OrderRouter from "./Order/order.routes";
import ProductRouter from "./Product/product.routes";

const router = express.Router({ mergeParams: true });

router.use("/user", UserRouter);
router.use("/client", ClientRouter);
router.use("/order", OrderRouter);
router.use("/orderItem", OrderItemRouter);
router.use("/product", ProductRouter);

export default router;
