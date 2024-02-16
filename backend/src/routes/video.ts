import { Request, Response, Router } from "express";
import { videoUpload } from "../middleware/videoUpload";
import { addVideo, getAllVideos } from "../controllers/video";
const route = Router()

route.post("/upload", videoUpload.single('video'),  addVideo)
    .get('/videos', getAllVideos)

export default route