/*let date= new Date();

let hour= date.getHours();
console.log(hour);

let custom_date= new Date(" 4 December 2034");
console.log(custom_date);*/

const hourspan= document.getElementById("hour");
const minutespan= document.getElementById("minute");
const secondsspan= document.getElementById("seconds");
const amorpmpan= document.getElementById("amorpm");

function changeTime(){
    const date= new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    hourspan.textContent=hour
    minutespan.textContent=minute
    secondsspan.textContent=second

    let t="AM"

    if(hour>12 && hour<24){
t= "PM"
    }
    //else{
//amorpm= "PM"
 //   }

    amorpm.textContent=t;
}

setInterval(changeTime,1000)