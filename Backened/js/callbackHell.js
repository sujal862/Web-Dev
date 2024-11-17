// let h1 = document.querySelector("h1");

// function changeColor(color , delay , nextColorChange) {
//     setTimeout(()=> {
//         h1.style.color = color;  //1sec bad hoga
//         nextColorChange();       // " " " "
//     } , delay);
// }

// changeColor("red" , 1000 , () => {
//   changeColor("green" , 1000 , ()=>{
//     changeColor("orange",1000)
//     });
// });

//callback hell 

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("Success: your data was saved : ");
//     savetoDb("hello world", () => {
//         console.log("success2: data2 saved");
//         savetoDb("op life", () => {
//             console.log("success3: data3 saved");
//         }, () => {
//             console.log("failure3: data3 not saved");
//         })
//     }, () => {
//         console.log("failure2: data2 not saved");
//     })
// },
//     () => {
//         console.log("weak connection. data not saved");
//     }
// );

// using promises rewriting color change code

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        h1.style.color= color;
        resolve("color changed!");
    }, delay);
    })
}

changeColor("red" ,1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("green" , 1000);  // returned a promise
})
.then(() =>{
    console.log("green color was completed");
    return changeColor("blue" , 1000);
})
.then(() =>{
    console.log("blue color was completed");
    return changeColor("orange" , 1000);
})
    .then(() => {
        console.log("orange color was completed");
    })