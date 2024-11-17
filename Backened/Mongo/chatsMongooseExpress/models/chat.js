const moongose = require("mongoose");
const { createIndexes } = require("moongose/models/user_model");

const chatSchema = new moongose.Schema({
    from : {
        type: String,
        required: true
    },
    to: {
        type: String,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true
    },
});

const Chat = moongose.model('Chat', chatSchema);

module.exports = Chat;