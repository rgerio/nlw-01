import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    }),
    fileFilter(request: any, file: any, callback: any) {
        if (file.mimetype == 'image/png'
            || file.mimetype == 'image/jpg'
            || file.mimetype == 'image/jpeg'
        ) {
            callback(null, true);
        } else {
            return callback(new Error('Only .png, .jpg and .jpeg format allowed'));
        }
    },
}