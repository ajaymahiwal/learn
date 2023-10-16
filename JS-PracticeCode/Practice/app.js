console.log("Hello world");

//even or odd
// let num = prompt("Enter number here to check whether it is even or odd.");
// num = parseInt(num);

// if(num % 2 == 0){
//     console.log(`${num} is a Even Number.`);
// }
// else{
//     console.log(`${num} is a Odd Number.`);
// }


//login system
// let username = "jaymaster007";
// let password = "12345678";

// let user = prompt("Enter username");
// let pass = prompt("Enter password");

// if(user === username && pass === password){
//     console.log("Welcome dear, your account is now available to see. Check here.");
// }
// else{
//     console.log("Wrong username or password. Please try again later.");
// }



//Loops

for(let i=1;i<11;i++){
    console.log(i);
}

let run = true;
let n = 10;
while(n>0){
    console.log("number - ",n);
    n--;
}


//Number and String color in console of browser
console.log("100"); //black color
console.log(100); //blue color


//functions

function add(a,b){
    return a+b;
}

console.log("Sum of two numbers is:"+ add(10,5));

function reverse(str) {
    let s = "";

    for(let i=str.length-1;i>=0;i--){
        s+= str.charAt(i);
    }
    return s;
}

console.log("Reverse String :"+reverse("ajaymahiwal"));


function Hello(n){

    while(n > 0){
        console.log("Hello");
        n--;
    }
}

Hello(10);

//function expression
let namaste = function(s){
    console.log("Namaste India");
}
namaste();

//Arrow function
let multiply = (a,b)=>{
    return a*b;
}

console.log("Result is :"+multiply(10,5));
//Recursion

function print(n){
    if(n == 0){
        return;
    }
        console.log(n);
        print(n-1);
}

print(5);