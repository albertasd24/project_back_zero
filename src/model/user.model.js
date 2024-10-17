import { model, Schema } from "mongoose";


const userSchema = new Schema({
    name: String,
    lastname: String,
    cedula: String,
    role: String,
    status: { type: Boolean, default: true }
}, {
    timestamps: true,
    versionKey: false
})

const userModel = model('users', userSchema)

export { userModel };