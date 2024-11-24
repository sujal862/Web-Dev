//Schema and model(collection) is defined in this file

const moongose = require("mongoose");
// const { createIndexes } = require("moongose/models/user_model");

const chatSchema = new moongose.Schema({
    from : {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
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