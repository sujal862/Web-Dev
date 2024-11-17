// let arr=[1,2,3,4,5,6,2,3]
// let num=2;
// let idx = arr.indexOf(num);
// while(idx != -1){
// arr.splice(idx,1); 
// idx = arr.indexOf(num);
// }
// console.log(arr);


// let num = 28715562;
// let count=1;
// while(num>9){
//     num=num/10;
//     count++;
// }
// console.log(count);


// let num = 287152;
// let sum = 0;
// while(num>=1){
//     let rem = num%10;
//     num =  Math.floor(num / 10);
//     sum = sum+rem;
// }
// console.log(sum);


// let factorial=1
// let num=5;
// for(let i=1;i<=num;i++){
//     factorial=factorial*i;
// }
// console.log(factorial);


let array=[2,4,5,67,7,8];
let max=1;
for(let i=0;i<array.length;i++){
    if(max<array[i])
    max=array[i];
}
console.log(max);