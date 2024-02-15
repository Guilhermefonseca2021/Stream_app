import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "video") {
      const rootDirectory = path.dirname(require.main?.filename || "");
      cb(null, path.join(rootDirectory, "public", "videos"));
    }
  },
  filename: (req, file, cb) => {
    const videoExtension = file.mimetype.split("/")[1];
    const id = uuidv4();
    cb(null, "video_" + id + "." + videoExtension);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "video/mp4") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
