let max = prompt("enter the max number");
let num = Math.floor(Math.random()*max)+1;
let guess = prompt("enter the guess number")

while(true){
    if(guess == "quit"){
        console.log("user quit")
        break;     //break while loop
    }
    if(num == guess ){
       console.log(`Congratulation you guessed right! Random number was: ${num}`)
       break;
    }
    else {   //wrong guess
        if(guess > num){
            guess = prompt("your guess was too high ! please try again"); 
        }
        else{
            guess = prompt("your guess was too low. please try again"); 
        }
    }
}
