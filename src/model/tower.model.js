import { model, Schema } from "mongoose";


const towerSchema = new Schema({
    name: String,
    apartments: []
}, {
    timestamps: true,
    versionKey: false
})

const towerModel = model('towers', towerSchema)

export { towerModel };