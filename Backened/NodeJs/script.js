// let args = process.argv; //stores an array of all arguments
// //printing hello to every argument passed
// for(let i=2; i<args.length; i++){
//     console.log("hello to",args[i]);
// }


//from one file to another file data transfer
// let math = require("./math");
// console.log(math.PI);
// console.log(math.sum(2,8));


// //from one directory(folder) to another directory data transfer
// let info  = require("./fruits");  //info(an array) is requiring a whole directory
// console.log(info);

import {sum , PI}  from "./math.js";

console.log(sum(1,2));
