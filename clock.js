const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector(".js-time");
const dateTitle=clockContainer.querySelector(".js-date");
function getDate(){
    const date=new Date();
    const day=numberToDay();
    const month=numberToMonth();
    const dd=date.getDate();
    const year=date.getFullYear();
    dateTitle.innerText=`${day}, ${month} ${dd<10 ? `0${dd}`: dd}, ${year}`;
}

function numberToDay(){
    const week=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    const day=new Date().getDay();
    const today=week[day];
    return today;
}

function numberToMonth(){
    const month= new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec');
    const mm=new Date().getMonth();
    const today=month[mm];
    return today;
}

function getTime(){
    const date= new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;

}
function init(){
    getDate();
    getTime();
    setInterval(getTime,1000);
    setInterval(getDate,1000);
}
init();