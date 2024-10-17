import { Router } from "express";
import { uploadFileStorageMemory } from "../../middleware/handleFile.js";
import { createVehiclesMasive } from "../../controller/vehicles.controller.js";


const router = Router()

router.get("/vehicles")
router.get("/vehicles/:id",)
router.post("/vehicles",)
router.post("/vehicles/masive", uploadFileStorageMemory, createVehiclesMasive)
router.put("/vehicles/:id",)

export default router;