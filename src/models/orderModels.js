import mongoose from "mongoose"
import validator from "validator"

const orderSchema = mongoose.Schema({
    name: {
        type: String,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     validate: [validator.isEmail, "Please enter valid email address"],
    // },
    // password: {
    //     type: String,
    // },
    // bookmarks: {
    //     type: Array
    // },
    // resetToken: { type: String },
    // update: { type: String },
    // validEmail: { type: String, default: "not" },
    // emailToken: { type: String },
})

export default mongoose.models.Order || mongoose.model("Order", orderSchema)