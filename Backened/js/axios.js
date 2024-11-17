let url = 'https://catfact.ninja/fact';
let para = document.querySelector("p");
let btn = document.querySelector("button");


btn.addEventListener("click", async ()=>{
    let output = await getFacts();
    para.innerText = output;
})
async function getFacts(){
    try{
    let res = await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("NO fact found");
    }
}