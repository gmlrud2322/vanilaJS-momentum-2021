const form=document.querySelector(".js-form")
const input=form.querySelector("input");
const greeting=document.querySelector(".js-greetings");


const USER_LS="currentUser",
SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
function timeGreeting(){
    const hour=new Date().getHours();
    
    if(hour>=5 && hour<12){
        return "Good morning, ";
    }
    else if(hour>=12 && hour<18){
        return "Good afternoon, ";
    }
    else if(hour>=18 && hour<22){
        return "Good evening, ";
    }
    else{
        return "Good night, ";
    }

}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    
    greeting.innerText=timeGreeting()+`${text}.`;
    toDoForm.classList.add(SHOWING_TD);
    toDoList.classList.add(SHOWING_TD);
    
}
function loadName(){
const currentUser=localStorage.getItem(USER_LS);
if(currentUser===null){
    askForName();
    console.log("notask"+currentUser);
}else{
    paintGreeting(currentUser);
    toDoForm.classList.add(SHOWING_TD);
    toDoList.classList.add(SHOWING_TD);
    console.log("afterask"+currentUser);
}
}
function init(){
    loadName();
}
init();