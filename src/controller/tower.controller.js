import { towerCreateTowersMasiveService } from "../services/tower.service.js";

export const createTower = (req, res) => {
    try {
        console.log();

    } catch (error) {

    }
}

export const createTowersMasive = async (req, res) => {
    try {
        const responseTowerCreated = await towerCreateTowersMasiveService(req.body);
        res.status(202).json(responseTowerCreated)
    } catch (error) {
        console.log(error);
        
        res.status(400).json(error)
    }
}