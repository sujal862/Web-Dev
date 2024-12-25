const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const path = require('path');
const exp = require('constants');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', (req,res) => {
    let {username, email, password, age} = req.body;
    //encrpting the password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password,salt, async function(err, hash){
            let newUser =  await userModel.create({   //create is a function of mongoose which is used to create a new document in the collection and save it to database
                username: username,
                email: email,
                password: hash,
                age: age
            })

            let token = jwt.sign({email:email}, 'secrettt');
            res.cookie('token', token);
            res.send("Accound created");
        })
    });
})

app.get('/login', (req,res) => {
    res.render('login');
});

app.post('/login', async (req,res) => {
    let user = await userModel.findOne({email: req.body.email}); //if email is found in the database then it will return the user(document) and store it in var else null is stored
    if(!user) return res.send('something went wrong');
    bcrypt.compare(req.body.password, user.password, function(err, result){  //compare the password(current pass from login page) with the hash password stored in the database
        if(result) {
            let token = jwt.sign({email: user.email}, 'secrettt')
            res.cookie('token', token);
            res.send("hurray you are logged in");
        }
        else res.send("wrong password");
    })
});


app.get('/logout', (req,res) => {
    res.cookie('token', '');
    res.redirect('/');
})

app.listen(3000);