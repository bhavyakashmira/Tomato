import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        
        if (!user) {
         return res.json({ success: false, message: "user doesnt exist" })
        }
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.json({ success: false, message: "wrong password" })
        }

        const token = createToken(user._id);
        return res.json({ success: true , token })
        
    } catch (error) {
        
        console.log(error)
        return res.json({ success: false, message: "error" })
        
    }
    
}


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


//registerUser

const registerUser = async (req, res) => {

    const { username, email, password } = req.body;
    try {
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({success:false,message:"user already exists"})
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "need strong password" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            username: username,
            email: email,
            password:hashedPassword,
        })

        const user = await newUser.save()
        const token = createToken(user._id);
        res.json({success:true ,token})
        
    } catch(error){
        console.log(error)
        res.json({success:"error"})
        
    }
    
}

export {loginUser ,registerUser}