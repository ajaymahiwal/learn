


// console.log("Hello World");

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextcolor) {
    console.log(color + " color Applied.");
    setTimeout(() => {
        h1.style.color = color;
        if (nextcolor) nextcolor();
    }, delay);
}

// async function color(){
//     await changeColor("blue",2000);
//     await changeColor("red",1000);
//     await changeColor("green",1000);
// }

// changeColor("blue",1000);
// changeColor("red",1000);
// changeColor("green",1000);


// CallBack Hell
/**
 changeColor("blue",1000,()=>{
    changeColor("red",1000,()=>{
        changeColor("green",1000);
    });
});
 */

// Using Promise
/*
function changeColor(color,delay){
    return new Promise((res,rej)=>{
        let chance = Math.random()*10;
        setTimeout(()=>{
            if(chance<5) {
                h1.style.color=color;
                res(color + "Color Changed Process Done.");
            } 
            else rej(color + "Color Changed Process Failed.");
        },delay);
    })
}


// changeColor("blue",1000)
// .then((result)=>{
//     console.log(result);
//     changeColor("red",1000)
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// });


// UpDated Version (Modified Version)
changeColor("blue",1000)
.then((result)=>{
    console.log(result);
    return changeColor("red",1000)
})
.then((result)=>{
        console.log(result);
    })
.catch((err)=>{
    console.log(err);
});
*/




// Using async await

function changeColor(color, delay) {
    return new Promise((res, rej) => {
        let chance = Math.random() * 10;
        setTimeout(() => {
            if (chance > 3) {
                h1.style.color = color;
                res(color + "Color Changed Process Done.");
            }
            else rej(color + "Color Changed Process Failed.");
        }, delay);
    })
}


async function change() {
    try {
        let res1 = await changeColor("blue", 1000);
        console.log(res1 + " Color changed.");
        let res2 = await changeColor("yellow", 1000);
        console.log(res2 + " Color changed.");

    }
    catch(err){
        console.log(err);
    }
    return "Done";
}

// let demo = change();
// console.log(demo);

async function dolly(){
    return "Hello Jii Kese Hoo Aap.";
}




let url_1 = "https://catfact.ninja/fact";
let url_2 = "https://icanhazdadjoke.com/";


async function getJoke(){
    let raw = await fetch(url_2,{headers:{
        'accept':'application/json',
    }});
    console.log(raw);
    let data = await raw.json();
    console.log(data);
}

// getJoke();



// Call API's Using fetch or axios
async function getFact1(){
    let raw = await fetch(url_1);
    console.log(raw);
    let data = await raw.json();
    console.log(data);
}

async function getFact2(){
    let json = await axios.get(url_1);
    console.log(json);
    console.log(json.data);
}


async function getFact(){
    console.log("Get Fact using fetch");
    await getFact1();
    console.log("Get Fact using axios library");
    await getFact2();
}
// getFact();



// Promise and axios
// Working but i think not good way because what if not able or error aa gyi to koi other way hai hi nhi handle kerne ka not even try catch because hum direct res() send ker rhe hai ager error hui to error vala hi object jayega or fir error aa jayegi or program stop.
function getAnotherFact(){
    return new Promise((res,rej)=>{
        console.log("Promise and Axios");
        res(axios.get(url_1));
    })
}

getAnotherFact()
.then((result)=>{
    console.log(result);
    console.log(result.data);
})
.catch((err)=>{
    console.log(err);
})

// Time pass
h1.addEventListener("click",()=>{
    h1.classList.toggle("size");
});