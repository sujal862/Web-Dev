let inp = document.querySelector("#text");
let para = document.querySelector("p");

inp.addEventListener("input" , function() {
    para.innerText = (inp.value);
    console.log(inp.value);
})
