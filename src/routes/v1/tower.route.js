import { Router } from "express";
import { createTowersMasive } from "../../controller/tower.controller.js";

const router = Router()

router.get("/towers")
router.get("/towers/:id",)
router.post("/towers",)
router.post("/towers/masive", createTowersMasive)
router.put("/towers/:id",)

export default router;