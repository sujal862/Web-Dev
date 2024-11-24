//sample data to intialise a collection
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
main()
.then(() => {
    console.log('MongoDB Connected…')
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatshapp');  //here dbs=watshapp -> connecting with watshapp dbs
}

const allChats = [
    {
        from: "John",
        to: "Jane",
        msg: "Hello Jane",
        created_at: new Date(),
    },
    {
        from: "Jane",
        to: "John",
        msg: "Hi John, how are you?",
        created_at: new Date(),
    },
    {
        from: "John",
        to: "Jane",
        msg: "I'm good, thanks! How about you?",
        created_at: new Date(),
    },
    {
        from: "Jane",
        to: "John",
        msg: "I'm doing well, thank you!",
        created_at: new Date(),
    },
    {
        from: "Emily",
        to: "Michael",
        msg: "Hey Michael, long time to see!",
        created_at: new Date(),
    },
    {
        from: "Michael",
        to: "Emily",
        msg: "Yeah, it's been a while. How have you been?",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);