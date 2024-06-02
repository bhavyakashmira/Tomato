import { loginUser, registerUser } from "../controllers/user.controller.js";
import express from "express"

const userrouter = express.Router();

userrouter.post("/login", loginUser);
userrouter.post("/register", registerUser)


export default userrouter
