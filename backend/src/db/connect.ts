import mongoose from "mongoose";
import connect from "../config/connect";

export default async function connectToDatabase () {
    await mongoose.connect(`${connect.database}`)
}

