console.log("hello world");

function startClock(){

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    let date = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    let day = today.getDay();
    m = check(m);
    s = check(s);
    document.getElementById("clock").innerText = h +":"+m+":"+s;
    document.getElementById("date").innerText = date + "-" + month +"-" + year;
    document.getElementById("day").innerText = getDayOfWeek(day);

    setInterval(startClock,1000);
}

startClock();

function check(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

function getDayOfWeek(i){
    switch (i) {
        case 0:
            // return "Sunday";
            return "रविवार";
            break;
        case 1:
            return "सोमवार";
            // return "Monday";
            break;
        case 2:
            return "मंगलवार";
            // return "Tuesday";
            break;
        case 3:
            return "बुधवार";
            // return "Wednesday";
            break;
        case 4:
            return "गुरूवार";
            // return "Thursday";
            break;
        case 5:
            return "शुक्रवार";
            // return "Friday";
            break;
        case 6:
            return "शनिवार";
            // return "Saturday";
            break;
    
        default:
            break;
    }
}