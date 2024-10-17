import { towerModel } from "../model/tower.model.js";

export const towerCreateTowersMasiveService = async (data) => {
    let towers = []
    let { numberTowers, numberApartements } = data;
    for (let index = 0; index < numberTowers; index++) {
        let apartments = []
        for (let index = 0; index < numberApartements; index++) apartments.push(index + 1);
        towers.push({ name: `Torre ${index + 1}`, apartments: apartments });
    }
    const response = await towerModel.insertMany(towers);
    return response;
}