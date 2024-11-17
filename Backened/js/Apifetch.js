// let url = 'https://catfact.ninja/fact';

// fetch(url)  //returns a promise
//     .then((res)=>{
//     console.log(res);
//     return res.json();
//     })
//     .then((data)=>{
//         console.log(data.fact);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })



chaining

let url = 'https://catfact.ninja/fact';

fetch(url)  //returns a promise
    .then((res)=>{
    return res.json();
    })
    .then((data)=>{
        console.log(data.fact);
        return fetch(url);
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.fact); 
    })
    .catch((err)=>{
        console.log(err);
    })