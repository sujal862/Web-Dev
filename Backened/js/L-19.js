// function getElements(arr,target){
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>target){
//         console.log(arr[i]);
//     }
// }    
// }
// getElements([1,4,6,8,9],4);  //call



let unique = (str) => {        //arrow function
for(let i=0;i<=str.length;i++){
    let count =0;
    for(let j=0;j<=str.length;j++){
        if(i!=j && str[i]==str[j]){ count=1;}
        else {break;}
    }
}
}
unique("abcdabcdefgggh")



// let max=0;
//  function list (country){
//     for(let i=0;i<country.length;i++){
//         if(max<country[i].length){max=country[i].length;}
//     }
   
//     for(let i=0;i<country.length;i++){
//         if(max==country[i].length){console.log(country[i])}
//     }
// }
// list(["Australia" , "Germany" , "United States of America"]);



function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(100,200))