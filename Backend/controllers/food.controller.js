import foodModel from "../models/Food.model.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        let image_filename = req.file?.filename;

        // Validate required fields
        const missingFields = [];
        if (!name) missingFields.push("name");
        if (!description) missingFields.push("description");
        if (!price) missingFields.push("price");
        if (!category) missingFields.push("category");
        if (!image_filename) missingFields.push("image");

        // If there are missing fields, return an error response
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `The following fields are required: ${missingFields.join(', ')}`
            });
        }

        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred", error: error.message });
    }
};

//all list food
const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error})
        
    }
    
}

//remove food 
const removefood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => {
        })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true,message:"food removed" })
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error })
        
    }
    
}

export { addFood , listfood ,removefood };
