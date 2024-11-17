let favouriteMovie = "Avatar";
let guess=prompt("Enter the favourite movie");

while(favouriteMovie!=guess && favouriteMovie!="quit"){
    guess=prompt("Wrong! please try again");
}
if(guess == favouriteMovie){
    console.log("congratulations")
}              
else{
    console.log("you quit");
}     