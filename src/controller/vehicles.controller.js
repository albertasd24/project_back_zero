import { createVehiclesMasiveService } from "../services/vehicles.service.js";


export const createVehiclesMasive = async (req, res) => {
    try {
        const bufferFileUploaded = req.file.buffer;
        const responseParking = await createVehiclesMasiveService(bufferFileUploaded);
        res.status(200).json(responseParking);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}