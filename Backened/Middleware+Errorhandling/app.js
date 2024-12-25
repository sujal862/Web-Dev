//Read notes.md file
const express = require('express');
const app = express();
//Middleware
// app.use((req, res, next) => {
//     console.log('Middleware 1st');
//     next();  //next call krna pa -> agr koi dusra middle ware hoga to wo call hojyga(chaining starts) ni to jis route pa request aya hoga us route ko call chla jayga
// })

// app.use((req, res, next) => {
//     console.log('Middleware 2nd');  //if yha pa res.send("hii") ya rahta i.e 2nd middleware response send krdiya to chaining tut jata and req-res cycle bhi tut jata
//     next();
// })


//Creating Utilit Middleware = Logger -> useful information ko console ma print krna   ( for similar work a popular npm package is there =  morgan)
// app.use((req, res, next) => {
//     req.time = new  Date(Date.now()).toString();  //current date and time in a readable string format.
//     console.log(req.method, req.hostname, req.path, req.time);
// });

let checkToken = (req, res, next) => {
    let {accessToken} = req.query;
    if(accessToken === '123456'){
        next();
    }
    else{
        throw new Error("Access Denied !")
    }
}

app.use("/random", (req,res, next) => {   //if you specify the path then this middleware will only run for all that path which starts with /random
    console.log('I am only for random page');
    next();
})

app.use("/api", checkToken, (req,res)=>{  //checkToken act as a middleware whill be call next if token is correct here next is res.send("data") wala middleware
    res.send("data");
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/wrong', (req,res)=>{    // error
   throw new Error('BROKEN')
})

app.get('/random', (req, res) => {
    res.send('Random page');
})

//404 error 
app.use((req, res) => {   // this middleware is written in last so that it will run if non of the above path is called
    res.status(404).send('404 Not Found');  //status code = 404 maina set kiya ha
})

app.listen(8080, () =>{
    console.log('Server is running on port 8080');
})