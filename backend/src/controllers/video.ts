import { Request, Response } from "express";
import VideoShema from "../models/VideoSchema";
import Video from "../types/video";

export async function addVideo(req: Request, res: Response) {
  const { title, description }: Video = req.body;
  const videoPath = req.file?.path;

  try {
    const video = new VideoShema({
      title,
      description,
      filename: req.file?.filename,
      videoUrl: videoPath,
    });

    await video.save();
    res.status(200).json({ message: "Video uploaded successfully!" });
  } catch (err: any) {
    res.status(422).json({ message: `video failed to upload ${err}` });
  }
}

export async function getAllVideos(req: Request, res: Response) {
  try {
    const videos = await VideoShema.find();
    res.status(200).json({ videos });
  } catch (err) {
    res.status(200).json({ message: `videos fetch failed ${err}` });
  }
}

export async function getVideoById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const videoId = await VideoShema.findById(id);

    res.status(200).json(videoId);
  } catch (err) {
    res.status(200).json({ message: `video fetch failed ${err}` });
  }
}
