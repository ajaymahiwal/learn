

// Date 16 October 2023

let text = "I-am-The-Title-Of-this-Page.";
let space = " ";
let i=0;

function titleMaker(){ 
    if(i==text.length){
        return;
    }
    if(text[i]==='-'){
        console.log(i);
        i++;
        document.title = document.title + " " + text[i];
    }
    else{
        document.title+=text[i];
    }
    i++;
    setTimeout(titleMaker,200);
}

// document.body.onload = function(){
//     document.title="";
//     titleMaker();
// }


let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
setInterval(()=>{
    h1.innerText = document.timeline.currentTime;
},1000);
setInterval(()=>{
    let num = document.timeline.currentTime;
    num/=1000;
    num =  Math.ceil(num);
    h2.innerText = num;
},1000);


console.log(document.forms);
console.dir(document.querySelector(".user-form"));
console.dir(document.querySelector(".user-form").length);
console.log(document.querySelectorAll(".para"));


let allNodeListOfP_Tags = document.querySelectorAll(".para");

for(let i=0;i<allNodeListOfP_Tags.length;i++){
    // allNodeListOfP_Tags[i].style.backgroundColor = "blueviolet";
    allNodeListOfP_Tags[i].classList.add("effect");
}



let movingBox = document.querySelector(".moving-box");
let moveBtn = document.querySelector(".move-btn");
let id = null;

moveBtn.addEventListener("click",()=>{
    // movingBox.classList.add("")
    id = setInterval(moveObject,50);
});

let t=0,l=0;
function moveObject(){
    if(t==95 && l==95){
        clearInterval(id);
    }
    else{
        t++;
        l++;
        movingBox.style.top = t + "%";
        movingBox.style.left = l + "%";
    }
}
