

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

document.body.onload = function(){
    document.title="";
    titleMaker();
}


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