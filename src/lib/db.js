// create the mongodb connection

import mongoose from "mongoose";

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('DB connected');
}

export default dbConnect;