const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const model = mongoose.model("admin", userSchema)

module.exports = model