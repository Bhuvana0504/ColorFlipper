let c=document.getElementById("color")
let w=document.getElementById("wrap")
let b=document.getElementById("btn")
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
b.addEventListener('click',display)
function display(){
    let s='#'
    for(let i=1;i<=6;i++){
        s+=random();
    }
    w.style.backgroundColor = s
    c.innerHTML = s
}
function random(){
    let r=Math.floor(Math.random()*16)
    return hex[r];
}
