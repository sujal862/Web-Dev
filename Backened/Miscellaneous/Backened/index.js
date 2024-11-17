const express = require('express');
const app = express();
const port =8080;

/*to understand the urlencoded data for express and data is parsed in understandable format  */
app.use(express.urlencoded({extended:true})); //a middleware to parse the urlencoded data
app.use(express.json()); //a middleware to parse json data
 
app.get('/register',(req,res)=>{
    res.send('Standard GET response');
})

app.post('/register',(req,res)=>{
    let {user, password} = req.body;
    res.send(`Standard POST response welcome ${user}`);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
