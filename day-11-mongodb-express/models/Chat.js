const mongoose = require("mongoose");

const chatSchema =  new mongoose.Schema({
    from: {
        type: String,
        required: true,
        trim: true
    },

    to: {
        type: String,
        required: true,
        maxlength: 200
    },

    message: {
        type: String,
        required: true,
        maxlength: 200
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;