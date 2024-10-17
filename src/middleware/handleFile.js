import multer, { diskStorage, memoryStorage } from "multer";
import { __dirname } from "../helper/__dirname.js";
import { join } from "path";

const ubicationStorage = diskStorage({
    destination: join(__dirname, "./documents/files"),
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const uploadFile = multer({
    limits: { fileSize: 20000000 },
    storage: ubicationStorage,
    dest: join(__dirname, "./documents/files")
}).single("file")


const uploadFileStorageMemory = multer({
    limits: { fileSize: 20000000 },
    storage: memoryStorage(),
    filename: (req, file, cb) => {
        cb(null, nombreArchivo);
    },
}).single("file")

export { uploadFile, uploadFileStorageMemory }