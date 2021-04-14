const toDoForm=document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector(".js-toDoList");

const TODO_LS='toDos';
const USER_LSS="currentUser";

const SHOWING_TD="toDo-showing";

let toDos=[];



function deleteToDo(event){
    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    /*console.log(event.target.parentNode);
    delteChild element mdn */

    const cleanToDos=toDos.filter(function(toDo){
        return toDo.id!==parseInt(li.id);
    });
    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
    //JSON.stringify-> object를 string으로 변환해줌
    //로컬스토리지에는 string값만 저장되기때문
}


function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    //const chkBox=document.createElement("input");
    
    /*const btnI=document.createElement("i");
    btnI.classList.add("far");
    btnI.classList.add("fa-trash-alt");
    delBtn.appendChild(btnI);

    fontawesome에서 아이콘 만든게 동작은 하는데 삭제될때 문제가 있음.
    i태그가 node로 인식안되는거 같다?
    */

    delBtn.innerText="✖";


    delBtn.addEventListener("click",deleteToDo);
   // chkBox.type="checkbox";

    const span=document.createElement("span");
    span.innerText=text;
   
   // li.appendChild(chkBox);
    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);

    const newId=toDos.length+1;
    
    li.id=newId;
    const toDoObj={
        text:text,
        id:newId
        
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}


function loadToDos(){
    const loadedToDos=localStorage.getItem(TODO_LS);   
        
        if(loadedToDos !== null){
        
            const parsedToDos=JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });
        }
    
    
}


function init(){
    const currentUser=localStorage.getItem(USER_LSS);
    console.log("todo"+currentUser);
    if(currentUser!==null){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
    }
}
init();