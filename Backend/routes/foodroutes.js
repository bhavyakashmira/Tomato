import express from "express";
import { addFood, listfood, removefood } from "../controllers/food.controller.js";
import multer, { MulterError } from "multer";

const foodrouter = express.Router();



const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null , `${Date.now()}${file.originalname}`)  
    }
})

const upload = multer({ storage: storage })
foodrouter.get('/list', listfood)
foodrouter.post('/remove',removefood)
foodrouter.post("/add",upload.single("image"),addFood)


export default foodrouter;