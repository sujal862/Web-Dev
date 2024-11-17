let todo=[];  //empty array

let req = prompt("please enter your request");

while(true){       //loop will continue to run always
    if(req == "quit"){ 
        console.log("quitting app")
        break;
    }   

    else if(req == "list"){    
        console.log("------------");
        for(let i=0;i<todo.length;i++){
            console.log(i , todo[i]);
        }
        console.log("------------");
    }
    else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let task = prompt("please enter the task you want to delete");
        let idx = todo.indexOf(task);
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("incorrect request!")
    }

    req = prompt("please enter your request");
}




