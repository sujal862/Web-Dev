const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
var methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//connection
main()
    .then(() => {
        console.log('MongoDB Connected…')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatshapp');  //here dbs=watshapp -> connecting with watshapp dbs
}


// let chat1 = new Chat({
//     from: "user1",
//     to: "user2",
//     msg: "Hello user2",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err.errors);
// });


//Index Routes
app.get("/chats", async (req, res) => {
    let chats = await Chat.find(); //return all the chat(document) inside Chat(collection)
    res.render("index.ejs", { chats });
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
    .then((res) => { console.log("chat was saved") })
    .catch((err) => { console.log(err.errors) });
    res.redirect("/chats")
})

app.get("/chats/:id/edit", async (req, res) =>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

app.patch("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let {msg : newMsg} = req.body; //renaming msg to newMsg and store the form data in newMsg
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg : newMsg}, {runValidators:true, new:true});
    console.log(updatedChat);
    res.redirect("/chats");
})

app.delete("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})