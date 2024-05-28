import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodrouter from "./routes/foodroutes.js"



//app config 
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.get("/", (req , res) => {
    res.send("working")
})

//db connection
connectDb();

//api endpoints
app.use("/api/food", foodrouter)
app.use("/images" , express.static("uploads"))


app.listen(3000, () => {
    console.log(`server is running at 3000`)
})
