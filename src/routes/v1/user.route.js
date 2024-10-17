import { Router } from "express";
import { createUsersMasive } from "../../controller/user.controller.js";
import { uploadFileStorageMemory } from "../../middleware/handleFile.js";


const router = Router()

router.get("/users")
router.get("/users/:id",)
router.post("/users",)
router.post("/users/masive", uploadFileStorageMemory, createUsersMasive)
router.put("/users/:id",)

export default router;