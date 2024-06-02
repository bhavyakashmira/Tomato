import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js"
import stripe from "stripe"

//placing order using

const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"NOT working"})
        
    }
    
}

const userOrders = async (req, res) => {

    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        res.json({success:true, data:orders})
    } catch (error){
        console.log(error)
        res.json({ success: true, message:"error" })
    }
    
}

export {placeOrder,userOrders}