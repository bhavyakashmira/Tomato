import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodrouter from "./routes/foodroutes.js"
import dotenv from "dotenv";
import userrouter from "./routes/userroute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/Orderroutes.js";
dotenv.config();


//app config 
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.get("/", (req , res) => {
    res.send("working")
})
app.get("/home", (req ,res) => {
    res.send("home")
})

//db connection
connectDb();

//api endpoints
app.use("/api/user",userrouter)
app.use("/api/food", foodrouter)
app.use("/images", express.static("uploads"))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)


app.listen(3000, () => {
    console.log(`server is running at 3000`)
})
