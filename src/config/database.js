import createHttpError from "http-errors";
import { connect } from "mongoose"


const conectioDatabase = async () => {
    try {
        const pollConection = await connect("mongodb://localhost:27017/project_Zaero");
        console.log("Conexión exitosa")
        return pollConection;
    } catch (error) {
       throw createHttpError(400, "Error conection database: " + error.message)
    }
}

export { conectioDatabase }