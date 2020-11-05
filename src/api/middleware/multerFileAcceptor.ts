import { Request } from "express";
import multer from "multer";

const _storage = multer.diskStorage({
  destination: function (req: Request, file: any, cb: Function) {
    cb(null, "upload/");
  },
  filename: function (req: Request, file: any, cb: Function) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

function _fileFilter(req: Request, file: any, cb: Function) {
  if (file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb("Image should be in png format", false);
  }
}

const multerFileAcceptor = multer({
  storage: _storage,
  fileFilter: _fileFilter,
  limits: {
    fieldSize: 1024 * 1024 * 2,
  },
});

export { multerFileAcceptor };
