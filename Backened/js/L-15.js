// Largest of 3 number
// let a=3099;
// let b=408;
// let c=67;
// if(a>b) {
//     if(a>c){
//         console.log(a,"is the largest")
//     }
//     else{
//         console.log(c, "is the largest")
//     }
// }
// else{
//     if(b > c){
//         console.log(b, "is the largest");
//     }
//     else{
//         console.log(c, "is the largest");
//     }
// }


let firstNum="2343";
let secondNum="4563";
let store1=firstNum[firstNum.length-1];
let store2=secondNum[secondNum.length-1];
if(store1==store2){
    console.log("has same last digit i.e ",store1);
}
else{
    console.log("has different last digit");
}