import { parkingLotCreateMasiveService } from "../services/parkingLot.service.js";

export const createParkingLotMasive = async (req, res) => {
    try {
        const bufferFileUploaded = req.file.buffer;
        const responseParking = await parkingLotCreateMasiveService(bufferFileUploaded);
        res.status(200).json(responseParking);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}