import { read, utils } from "xlsx"
import { parkingModel } from "../model/parkingLot.model.js";
import { getUserByCedula } from "./user.service.js";

export const parkingLotCreateService = async () => {

}

export const parkingLotCreateMasiveService = async (file) => {
    let parkingsLot = []
    const fileUploaded = read(file, { type: "buffer" });
    const sheetsFile = fileUploaded.Sheets[fileUploaded.SheetNames[0]];
    const dataFile = utils.sheet_to_json(sheetsFile, { header: 0 });
    for (const parking of dataFile) {
        if (parking?.cedula != undefined) {
            const { _id } = await getUserByCedula(parking.cedula)
            parking.cedula = _id;
        }
        parkingsLot.push({
            identificator: parking.identificador,
            type: parking.tipo,
            userAsignated: parking?.cedula !== undefined ? parking.cedula : null
        });
    }
    return await parkingModel.insertMany(parkingsLot);
}