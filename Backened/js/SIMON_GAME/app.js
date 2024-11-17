let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;
let Score = 0;
hs =0;


let h2 = document.querySelector("h2");

document.addEventListener ("keypress" , function() {
    if(started == false) {
      console.log("Game is started")
      started = true;

      levelUp();
    }
});

function btnFlash(btn) {  //btn need to be flashed will come as an argument
    btn.classList.add("flash");
    setTimeout(function() {  /// after 1sec "flash" class will be removed
        btn.classList.remove("flash");
    } , 250);
}


function levelUp() {
    userSeq = [];
    level++;  
    h2.innerHTML = `Level ${level}  | Score = ${Score}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); //random button accessed
    gameSeq.push(randColor);  // color added to game seq
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){ // for level up length should be equal
            setTimeout( levelUp , 1000);
            Score++;
        }
    } else {
        h2.innerHTML = `GAME OVER! Your Score was <b>${level-1}</b> <br> Press any key to restart`;
        reset();
        screenFlash();
    }
} 

function btnPress() { // function for button pressed by user
    let btn = this;  //here this is btnn  (accessing button pressed using 'this')
    btnFlash(btn);
    let userColor = btn.getAttribute("id"); //color stored
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);  //call

}

let allBtns = document.querySelectorAll(".btn");
for(btnn of allBtns){
    btnn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
} 

let body = document.querySelector("body");
function screenFlash() { 
    body.classList.add("screenflash");
    setTimeout(function() {  
        body.classList.remove("screenflash");
    } , 150);
}