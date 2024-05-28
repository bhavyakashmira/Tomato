import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://bhavyakashmira:vXSYrHmVWm4BKOly@cluster0.cla6kqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected"))
}

