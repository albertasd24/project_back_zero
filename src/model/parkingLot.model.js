import { model, Schema, Types } from "mongoose";


const parkingLotSchema = new Schema({
    identificator: String,
    type: String,
    userAsignated: { type: Types.ObjectId , ref:"users" }
}, {
    timestamps: true,
    versionKey: false
})

const parkingModel = model('parkings', parkingLotSchema)

export { parkingModel };