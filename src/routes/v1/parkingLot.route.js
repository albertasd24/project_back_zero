import { Router } from "express";
import { createParkingLotMasive } from "../../controller/parkingLot.controller.js";
import { uploadFileStorageMemory } from "../../middleware/handleFile.js";


const router = Router()

router.get("/parkings")
router.get("/parkings/:id",)
router.post("/parkings",)
router.post("/parkings/masive", uploadFileStorageMemory, createParkingLotMasive)
router.put("/parkings/:id",)

export default router;