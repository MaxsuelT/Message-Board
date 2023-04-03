const mongoose = require("mongoose")
const { Schema } = mongoose 

const messageSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String,
        required: true,
    },

})


module.exports = mongoose.model('Message', messageSchema)