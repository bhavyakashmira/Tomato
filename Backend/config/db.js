import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect(process.env.API_KEY).then(()=>console.log("DB connected"))
}

