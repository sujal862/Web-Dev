//Method-1

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function() {
    let newli = document.createElement("li");
    newli.innerText= inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.setAttribute("class" , "delete");

    newli.append(delBtn); //delete button added
    ul.append(newli);
    inp.value = ""; //empties the input clicking on adding task

    // on clicking delete btn
    delBtn.addEventListener("click" , function()  {
        newli.remove(delBtn);
    })

});


//Method-2 actual way to use delete using "event Delegation"

// see video  ( but default event not working )
