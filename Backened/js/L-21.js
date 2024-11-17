// let arr = [2,4,6,8,9];
// let sumofSquare = arr.reduce((sqsum,el) => {
//     return sqsum+(el*el);
// },0)
// let average = sumofSquare / arr.length;
// console.log(average);


// let arr1= [2,3,4,5,6];
// let newArr=arr1.map((el) => (el+5));
// console.log(newArr);


// let arr2=["apple","mango","papaya"];
// let newArr = arr2.map((el) => {
//     return el.toUpperCase();
// })
// console.log(newArr);


// const  doubleAndReturnArgs =(arr, ...args) =>[
//     ...arr,
//     ...args.map((v) => v*2),
// ];

// doubleAndReturnArgs([1,2,3],4,4)


let mergeObjects =(obj1 , obj2) =>({...obj1 , ...obj2});
mergeObjects({a:1 ,b:2}, {c:3 , d:4});
  

