import express from "express"
import { placeOrder, userOrders } from "../controllers/ordercontroller.js"
import authMiddleWare from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleWare, placeOrder);
orderRouter.post("/userorder",authMiddleWare,userOrders)

export default orderRouter