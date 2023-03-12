const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    status: {
        type: Boolean,
        require: true
    }
})

const model = mongoose.model("book", bookSchema)

module.exports = model