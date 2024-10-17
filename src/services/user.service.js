import { read, utils } from "xlsx";
import { userModel } from "../model/user.model.js";

export const createUsersMasiveService = async (file) => {
    let users = []
    const fileUploaded = read(file, { type: "buffer" });
    const sheetsFile = fileUploaded.Sheets[fileUploaded.SheetNames[0]];
    const dataFile = utils.sheet_to_json(sheetsFile, { header: 0 });
    for (const user of dataFile) {
        users.push({ name: user.nombre, lastname: user.apellido, cedula: user.cedula, role: "propietario" });
    }
    await userModel.insertMany(users);
}

export const getUserByCedula = async (cedula, filter = {}) => {
    const user = await userModel.findOne({ cedula: cedula }, filter);
    return user;
}