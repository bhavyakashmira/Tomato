import express from "express";
import { addToCart, removeFromCart, getcart } from "../controllers/cartcontroller.js";
import authMiddleWare from "../middlewares/auth.js";


const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare, addToCart);
cartRouter.post("/remove",authMiddleWare, removeFromCart);
cartRouter.post("/get", authMiddleWare,getcart);

export default cartRouter