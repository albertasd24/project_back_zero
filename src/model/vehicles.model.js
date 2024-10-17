import { model, Schema, Types } from "mongoose";


const vehicleSchema = new Schema({
    licensePlate: String,
    model: String,
    year: Number,
    brand: String,
    owner: { type: Types.ObjectId, ref: "users" }
}, {
    timestamps: true,
    versionKey: false
})

const vehicleModel = model('vehicles', vehicleSchema)

export { vehicleModel };