const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
var methodOverride = require('method-override') //helps to override POST method with PATCH method and DELETE method
const {v4 : uuidv4} = require('uuid'); //uuidv4 is a func which will return a unique id

app.use(express.urlencoded({extended: true}));  //parsing the form data (at submit) into a JavaScript object that you can easily work with.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method')); // it overrides POST method which have "?_method=PATCH" inside query string in action attribute of form

let posts = [
    {
        id: uuidv4(),
        username: "John",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "Sujal",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "Rahul",
        content: "I am a web developer"
    }, 
];

app.get('/posts', (req,res)=>{
    res.render('index.ejs', {posts});
})

//new post
app.get('/posts/new', (req,res)=>{
    res.render('new.ejs');
})

//after form submit -> post request
app.post('/posts', (req,res) =>{
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id, username, content});   //or u can write   posts.push({id, ...req.body});
    res.redirect('/posts');  
})

//find user by id
app.get('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id ); //returns a obj 
    res.render('show.ejs', {post});
})

//show the editing window
app.get('/posts/:id/edit', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id );
    res.render('edit.ejs', {post});
})

//update the post using patch request
app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id===p.id );
    let newContent = req.body.content;   //req.body gives the data of form  after urlencoded(converted to js obj) (either post/patch) request
    post.content = newContent;
    res.redirect('/posts');
})

//delete the post
app.delete('/posts/:id', (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id!=p.id );
    res.redirect('/posts');
})

app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`);
});