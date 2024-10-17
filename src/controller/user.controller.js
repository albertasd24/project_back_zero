import { createUsersMasiveService } from "../services/user.service.js";

export const createUsersMasive = async (req, res) => {
    try {
        const bufferFileUploaded = req.file.buffer;
        const responseTowerCreated = await createUsersMasiveService(bufferFileUploaded);
        res.status(202).json(responseTowerCreated)
    } catch (error) {
        console.log(error);
        
        res.status(400).json(error)
    }
}