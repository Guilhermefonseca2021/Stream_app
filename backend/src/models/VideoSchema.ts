import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    }, 
    description: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        trim: true,
        required: true
    },
    filename: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('video', VideoSchema) 
