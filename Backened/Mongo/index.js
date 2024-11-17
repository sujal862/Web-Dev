const mongoose = require('mongoose');

main()
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');  //here dbs=test -> connecting with test dbs
}

const userSchema = new mongoose.Schema({  //defines overall structure of each document in collection
  name:String,
  email:String,
  age:Number, 
});

const User = mongoose.model('User', userSchema); //model(class) creation(name of collection is defined and schema is given)
 

/*
//Inseting One document to collection
const user1 = new User({  //similar to class use
  name:"Adam",
  email:"adam@yahoo.in",
  age: 48,
});

user1.save(); //to save to dbs + it returns a promise

const user2 = new User(
  {
    name:'rishika',
    email:"rishika12@gmail.com",
    age:23,
  });

user2
  .save() 
  .then((res)=>{    // res variable in each .then() callback holds the response returned by MongoDB when a database operation completes successfully
    console.log("collection saved to database");
  })
  .catch((err)=>{
    console.log("collection not saved to database");
  })


//Inserting many documents in collection
User.insertMany([
    {name:'Tony', email:'tony@gmail.com', age:50},
    {name:'Peter', email:'peter@gmail.com', age:60},
    {name:'bruce', email:'bruce@gmail.com', age:70},
]).then((res)=>{
  console.log(res);
})
*/

//FIND
// User.find({age: {$gte:50} })  
//   .then((res)=>{
//     console.log(res);  // res-> stores the complete document[array]  returned by find method
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

// User.findById('672a369101fd1eeb187763cd')  
//   .then((res)=>{
//     console.log(res); 
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


//UPDATE
// User.updateOne({ name: "bruce"}, { age:49 } )
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// User.updateMany({ age: { $gt: 48 } }, { age:55 } )
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })

//find and update
// User.findOneAndUpdate({ name: "bruce"}, { age:49 }, {new:true} )
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//   User.findByIdAndUpdate('672a369101fd1eeb187763cd', { age:49 }, {new:true} )
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

//Delete
User.deleteMany({age: {$gt: 40}})
  .then((res)=>{
    console.log(res);
  })