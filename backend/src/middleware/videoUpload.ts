import { Request } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuid } from 'uuid';

// directorio de destino
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'video') {
            const rootDir = path.dirname(require.main!.filename);
            cb(null, path.join(rootDir, 'public/', 'videos'));
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1];
        const id = uuid();
        cb(null, `video_${id}.${videoExt}`);
    }
});

const fileFilter = (req: Request, file: any, cb: any) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const videoUpload = multer({ storage, fileFilter });
