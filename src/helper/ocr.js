import { join } from "path";
import { createWorker } from "tesseract.js"
import { __dirname } from "./__dirname.js";

export const scanFile = async () => {
   const worker = await createWorker('eng');
   const ret = await worker.recognize(join(__dirname,"/facture.png"));
   console.log(ret.data.text);
   await worker.terminate();
   
}