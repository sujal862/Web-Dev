const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const uuid  = require("uuid");
const methodOverride = require("method-override");

const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

//Creating connection to databse
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'sujal'
});

//username update function
const UpdateUsername = (id, username) => {
  let q = 'UPDATE user SET username = ? WHERE id= ?';
  try{
    connection.query(q,[username, id], (err, results) => {
      if(err) throw err;
      console.log(results);
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in Updating Username")
  }
}

//Home Route = fetch and show total no. of users on our app
app.get('/', (req,res)=> {
  let q = 'SELECT count(*) FROM user';

  try{
    connection.query(q, (err, results) => {
      if(err) throw err;
      let count = results[0]["count(*)"];  // array ka 1st ele which is a object sa "count(*)" key ka value nikal rha
      res.render("Home.ejs", {count});
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in DB")
  }
});

//Show Route
app.get('/users', (req,res) => {
  let q = "SELECT * FROM user";
  try{
    connection.query(q, (err, users) => {
      if(err) throw err;
      res.render("Show.ejs", { users });
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in DB")
  }
})

//edit Route
app.get('/users/:id/edit', (req,res) => {
  const {id} = req.params;
  let q = `SELECT * FROM user WHERE id = ?`;
  try{
    connection.query(q, [id], (err, results) => {
      if(err) throw err;
      let user = results[0];
      res.render("Edit.ejs", { user }); //bec user is array of object
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in DB")
  }
});

//Update username route
app.patch('/user/:id', (req,res) => {
  const {id} = req.params;
  let q = `SELECT * FROM user WHERE id = ?`;
  try{
    connection.query(q,[id], (err, user) => {
      if(err) throw err;
      if(req.body.password == user[0].password){
        UpdateUsername(id, req.body.username);
        res.redirect("/users");
      }
      else res.send("Password is incorrect");
    })
  } catch (err) {
    console.log(err);
    res.send("Some error in DB")
  }
});

app.listen(port, ()=>{
  console.log(`app is listening at port ${port}`)
})





// Learning

//generating fake data func
// const GetRandomUser = () => {
//   return [   //return an array of fake data
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// }


// // A simple SELECT query
// let q = 'SHOW TABLES';
// try{
//   connection.query(q, (err, results) => {  //to run query on database
//     if(err) throw err;
//     console.log(results); // results contains all rows(in form of object) returned by server => [ { Tables_in_delta_app: 'temp' }, { Tables_in_delta_app: 'user' } ]
//     console.log(results.length); // number of rows 
//   });
// } catch (err) {
//   console.log(err);
// }


////Inserting new data into table
// let q = 'INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)'; //placeholders(?) for values
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// try{
//   connection.query(q, user, (err, results) => {  // query ma agr koi placeholder millaga to usko replace karega user array ke values se
//     if(err) throw err;
//     console.log(results); 
//   });
// } catch (err) {
//   console.log(err);
// }


// //Inserting multiple rows into table
// let q = 'INSERT INTO user (id, username, email, password) VALUES ?'; //sql query with placeholders(?) for values
// let users = [
//   ["123b", "123_newuserb", "abc@gmailb.com", "abcb"],
//   ["123c", "123_newuserc", "abc@gmailc.com", "abcc"],
// ];
// try {
//   connection.query(q, [users], (err, results) => {  // query ma agr koi placeholder millaga to usko replace karega user array ke values se
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) {
//   console.log(err);
// }


// //Inserting fake data
// let q = 'INSERT INTO user (id, username, email, password) VALUES ?'; //sql query with placeholders(?) for values
// let data = [];
// for( let i = 1; i<=100; i++){
//   data.push(GetRandomUser());
// }

// try {
//   connection.query(q, [data], (err, results) => {  // query ma agr koi placeholder millaga to usko replace karega user array ke values se
//     if (err) throw err;
//     console.log(results);
//   });
// } catch (err) { 
//   console.log(err);
// }

//connection.end(); //to end the connection



