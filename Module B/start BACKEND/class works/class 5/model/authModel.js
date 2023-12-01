const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user name is required"]
    },
    password: {
        type: String,
        required: [true, "user name is required"]
    },
    contactNumber: {
        type: String,
        required: [true, "user name is required"]
    }
}, {
    timestamps: true
})

const authModel = mongoose.model("users", authSchema)
module.exports = authModel