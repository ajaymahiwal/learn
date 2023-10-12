

let input = document.createElement("input");
// input.placeholder="User Name";
input.setAttribute("placeholder","username");

let btn = document.createElement("button");
btn.classList.add("btn");
btn.innerText="Click me";

document.body.append(input,btn);

btn.setAttribute("id","btn");

let btnIDAccess = document.querySelector("#btn");
btnIDAccess.style.color="white";
btnIDAccess.style.backgroundColor="blue";

let h1 = document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.toggle("underline");
document.body.prepend(h1);

let p = document.createElement("p");
p.innerText="Apna College Delta Practice";
p.classList.toggle("p-des");
document.body.append(p);
/**
 
let para =  document.createElement("p");
let bodyPart = document.querySelector("body");
para.innerText="Hey I'm Red.";
para.classList.add("paraDesign");
bodyPart.append(para);


let h3 = document.createElement('h3');
h3.innerText="Hey I'm Blue.";
h3.classList.add("h3-design");
bodyPart.appendChild(h3);


let div = document.createElement("div");
div.classList.add("div-design");

let h1 = document.createElement("h1");
h1.innerText="Hey I'm in Div.";
let para1 = document.createElement("p");
para1.innerText="Me Too";

div.append(h1,para1);
bodyPart.prepend(div);


 */

// setTimeout(function(){
//     bodyPart.append(div);
// },5000);