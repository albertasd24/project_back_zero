import { read, utils } from "xlsx";
import { vehicleModel } from "../model/vehicles.model.js";
import { getUserByCedula } from "./user.service.js";

export const createVehiclesMasiveService = async (file) => {
    let vehicles = []
    const fileUploaded = read(file, { type: "buffer" });
    const sheetsFile = fileUploaded.Sheets[fileUploaded.SheetNames[0]];
    const dataFile = utils.sheet_to_json(sheetsFile, { header: 0 });
    for (const vehicle of dataFile) {
        if (vehicle?.cedula !== undefined) {
            const { _id } = await getUserByCedula(vehicle.cedula)
            vehicle.cedula = _id;
        }
        vehicles.push({
            licensePlate: vehicle.placa,
            model: vehicle.modelo,
            year: vehicle.año,
            brand: vehicle.marca,
            owner: vehicle?.cedula,
        });
    }
    return await vehicleModel.insertMany(vehicles);
}