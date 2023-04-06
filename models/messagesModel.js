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
    message: {
        type: String,
        required: true,
    }
    },
    {
        timestamps : true
    }

)


module.exports = mongoose.model('Message', messageSchema)