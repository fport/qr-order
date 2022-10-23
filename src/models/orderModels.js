import mongoose from "mongoose"
import validator from "validator"

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    orderStatus: {
        type: String
    }
})

export default mongoose.models.Order || mongoose.model("Order", orderSchema)