//Ans-1
let button = document.createElement("button");
let input = document.createElement("input");
let body = document.querySelector("body");
body.append(button);
body.append(input);
button.innerText ="Click me";
//Ans-2
input.placeholder = "username"
//Ans-3
button.setAttribute("id","btn");//getters and setters

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");  //or btn.setAttribute("class","btnStyle");

//Ans-4
let h1 = document.createElement("h1");
body.append(h1);
h1.innerText = "DOM Practice";
h1.classList.add("h1Style");

//Ans-5
let para = document.createElement("p");
para.innerHTML="Apna College <b>Delta</b> Practice";
body.append(para);
