const express = require("express"); //required the express  module
const app = express(); //express is a function that return object and is stored in app name variable

let port = 8080;

app.listen(port, ()=> { //listen  is a specific method that listens for incoming API request 
    console.log(`app is listening at port ${port}`);
})

// app.use((req,res)=>{
//     console.log("request recieved"); 
//     let code = "<h1>Fruits</h1><ul><li>Orange</li><li>apple</li></ul>";
//     res.send(code); //is that which will be displayed on viewport
// })

// app.get("/",(req,res)=>{
//     res.send("you contacted root path");
// })

// app.get("/home",(req,res)=>{
//     res.send("you contacted home path");
// })

// app.get("*",(req,res)=>{
//     res.send("you contacted path that don,t exist");
// })

//path parameters

// app.get("/:username/:id",(req,res)=>{
//     let {username , id} = req.params;   //returns a object (user server ko request krna ka sath data bhi beja) -> req.params() obj looks like {username : sujal , id : 123}
//     let htmlStr = `<h1>Welcomr to the page of ${username}.`;
//     res.send(htmlStr);
// })


//query String

app.get("/search",(req,res)=>{
    let {q} = req.query;  //req.query returns a object and value of q is stored in q
    if(!q) res.send(`<h1>Nothing searched`);
    res.send(`<h1>search result for query : ${q}</h1>`);
})