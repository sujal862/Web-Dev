const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

//serving static files
app.use(express.static("public")); //public folder will serve its all files
// app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/public/style")));  //if style.css file is inside subdir of public dir
app.use(express.static(path.join(__dirname,"/public/js")));


/*ejs is also a package and express has already required it so we can direct use it 
->This code means that whenever you call res.render("viewName"), Express will look for viewName.ejs inside the views folder by default and render it using the EJS engine */
app.set("view engine", "ejs");  


/*if you run/start the server from another dir than how to run the code? { to strt the server from other dir- nodemon ejs/index.js} 
-> by default views folder is searched inside folder from where server is started/runned  
->by using the this code i am telling express ki views name ka folder aapko jo path hum set kiya ha wha milaga 
->path ak package ha jisma ak join function hota ha that joins two path
->_dirname -> is the path of current working dir i.e dir in which index.js code is written*/
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})


/*3rd line -another parameter ->object-> in which key stores the data(value) coming from database - just write key in html in ejs tag to acces the value 
if key &  val has same name(mostly same hi use krta h) {diceVal :diceVal} -> can be written as {diceVal}*/
app.get("/rolldice", (req,res)=>{
    let diceVal =  Math.floor(Math.random()*10); //database 
    res.render("rolldice.ejs", {diceVal}); 
})


//instagram ejs
// app.get("/ig/:username", (req,res)=>{
//     const followers = ['Prince','Rohit','Harsh','Sakshi','Preeti']
//     let {username} = req.params;
//     res.render("insta.ejs", {username, followers})
// } )

//data.json sa data use krna
app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json"); //returns a obj
    let {username} = req.params;
    const data = instaData[username]; //data of specific username = obj
    if(data){
        res.render("insta.ejs", {data});
    } else{
        res.render("error.ejs");  //if data = null
    }
    
});

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})
