const multer = require('multer');

const uploadStorage = multer.diskStorage({
    destination:(req, file, callback) => {
        if(file.mimetype.includes("image")) {
            callback(null, "uploads/images/");
        }
        else if(file.mimetype.includes("video")) {
            callback(null, "uploads/videos/");
        }
        else {
            callback(new Error("Unsupported file type"), null);
        }
    },
    filename:(req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`)
    }
});

const validateTypeFile = (req, file, callback) => {
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp", "video/mp4", "video/avi", "video/mkv"];

    if(allowedMimeTypes.some(type => file.mimetype.includes(type))) {
        callback(null, true);
    }
    else {
        req.uploadError = {
            error:`Unsupported file type ${file.mimeType}`
        }
        return callback(null, false);
    }
};

const uploadSingleFile = multer({storage:uploadStorage, fileFilter:validateTypeFile});

module.exports = uploadSingleFile;