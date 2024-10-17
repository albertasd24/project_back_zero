import express, { json, urlencoded } from "express"
import { routerApp } from "./src/routes/index.js"
import { conectioDatabase } from "./src/config/database.js"
import cors from "cors";
import { scanFile } from "./src/helper/ocr.js";
const app = express()

scanFile()

app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }));
conectioDatabase()
            .then()
            .catch((err)=>console.log(err))

routerApp(app)

app.listen(3300, () => console.log(`Server run 3000`))