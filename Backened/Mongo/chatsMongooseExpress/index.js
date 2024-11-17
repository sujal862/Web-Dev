const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');

app.use("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatshapp');  //here dbs=watshapp -> connecting with watshapp dbs
}

let chat1 = new Chat({
    from: "user1",
    to: "user2",
    msg: "Hello user2",
    created_at: new Date(),
});

chat1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})