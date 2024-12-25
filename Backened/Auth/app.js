const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser()); //cookie parser is used to parse the cookie from the request(browser) and store it in req.cookies

// app.get("/", (req,res) =>{
//     res.cookie("name", "harsh");  //cookie is set and ya cookie sara route ma pass hojayga  it returns {name: "harsh"}
//     res.send("done");
// })
// app.get("/read", (req,res) =>{
//     console.log(req.cookies);  // read route ma bhi cookie ha so you can access it  it will return {name: "harsh"}
//     res.send("readpage");
// })


//encrption of password using bcrypt
// app.get("/", (req,res) =>{
//     bcrypt.genSalt(10, function(err, salt) {   //this fun generates salt of 10 saltrounds - salt is a random string that is used to hash the password // saltrounds indicates how many rounds of hashing to apply, with a higher number providing greater security but requiring more processing time
//         bcrypt.hash("polololololo", salt, function(err, hash) {  // This function takes the plaintext password and the generated salt to create a hashed version of the password.
//             console.log(hash);  // generated hash is your password
//         });
//     });
// })

//comparing the password with hash
// app.get("/", (req,res) =>{
//     bcrypt.compare("polololololo", "$2b$10$rgta2VNktAtIZhShFYEp3uyjedN04E9TfutkKQx5RMOZN0HAr1uMO", function(err, result){
//         console.log(result);  //if polololololo is equal to hash then it will return true else false
//     })
// })


//jwt token generation  (jwt.sign(payload, secretkey)) -> payload ko acces krna ka liya we need to use jwt.verify(token, secretkey)  //secretkey is set while generating the token and wohi secret sa hum dencrypt krsta ha token ko to get payload 
app.get("/", (req,res) =>{
   let token = jwt.sign({emai: "sujal@example.com"}, "secret"); // a long string jwt will be stored in token var// token is generated yhi wo lmbi si string ha jo server browser ko bejta hai in cookies and than browser send it back to server each time the request is made in page
   res.cookie("token", token); //{token:token}
   res.send("done");
})

// decoding the token
app.get("/read", (req,res) =>{
    // console.log(req.cookies.token); //token is read from the cookie
    let data = jwt.verify(req.cookies.token, "secret"); // The token received from cookies is verified using the "secret" key.// If the token is valid and was signed using the same secret key, jwt.verify() returns the decoded data.// If the token is invalid or the secret key is incorrect, an error will be thrown
    console.log(data); 
})

app.listen(3000);

