let url = 'http://universities.hipolabs.com/search?name=';
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let cllg = await getCollege(country); //array

    show(cllg);

})

function show(cllg){
    let list = document.querySelector("#list");
    list.innerText = "";
    
    for(col of cllg){
        console.log(col.name);

        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
    let res = await axios.get(url + country); //concatinates the college with url i.e name=college
    return res.data;  //return an array
    } catch(e){
        console.log("error occured",e);
    }
}
