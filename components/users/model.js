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
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "book"
    }]
})

const model = mongoose.model("user", userSchema)

module.exports = model