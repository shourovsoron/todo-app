
let newTask = document.querySelector('#new-task'); //get new task input elemnt
let form = document.querySelector('form'); //get new task form
let IncompleteUl = document.querySelector('#items'); //get incomplete UL
let AllTaskConatiner = document.querySelector('.task-container'); //get incomplete UL
let completeUl = document.querySelector('.complete-list ul'); // Get complete UL


let createTask =function(taskname){
    let listItem = document.createElement("li")
    let label = document.createElement("label");
    let EditBtn = document.createElement("span");
    EditBtn.classList="editIcon"
    EditBtn.innerHTML=`<i class="fa-regular fa-pen-to-square"></i>`;
    let checkBox = document.createElement('input');
  

    checkBox.type ="checkbox";

    label.innerText = taskname;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(EditBtn);

    return listItem;
}

let addtask= function(){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    IncompleteUl.appendChild(listItem);
    newTask.value="";
    InCompleteItemsBind(listItem );
    SaveData()
}


let InCompleteItemsBind = function(listItem){
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    let EditBtn = listItem.querySelector(".editIcon");
    // checkBox.onchange = completeTask;
    // checkBox.addEventListener("change", completeTask);
    checkBox.setAttribute("onchange", "completeTask(this)");
    EditBtn.setAttribute("onclick", "EditFunction(this)");
    // EditBtn.onclick = EditFunction;
}

let completeTask = function(item){
    let listItem = item.parentNode;
    console.log(listItem);
    let deletebtn = document.createElement("button");
    let EditBtn = listItem.querySelector(".editIcon")
    deletebtn.innerText="Delete";
    deletebtn.classList.add("delete");
    listItem.appendChild(deletebtn);
    listItem.removeChild(EditBtn);
    item.remove();
    completeUl.appendChild(listItem);
    CompleteItemsBind(listItem);
    SaveData()


}



let CompleteItemsBind = function(listItem){
    let deletebtn = listItem.querySelector('.delete')
    // deletebtn.onclick = deleteTask;
    deletebtn.setAttribute("onclick", "deleteTask(this)");

}

let deleteTask = function(item){
    let listItem = item.parentNode;
    completeUl.removeChild(listItem);
    SaveData()

}

let EditFunction = function(item){

    console.log("edit btn click Clicked");
    let TaskLabel = item.previousElementSibling;
    let TaskName = prompt("Please enter your Task Name", `${TaskLabel.innerText}`);

    if (TaskName.length >= 1) {
   
    TaskLabel.innerHTML= TaskName;
   
    }
    SaveData()

}

for(let i=0; i < completeUl.children.length; i++){
    CompleteItemsBind(completeUl.children[i]);

}

for(let i=0; i < IncompleteUl.children.length; i++){
    InCompleteItemsBind(IncompleteUl.children[i]);

}


form.addEventListener("submit", ()=>{
    if(!newTask.value==""){
        
        addtask();
    }else{
        event.preventDefault();
        alert("Add Task")
    }

        

});

function SaveData(){
    localStorage.setItem("SavedData", IncompleteUl.innerHTML );
    localStorage.setItem("SavedComoleteData", completeUl.innerHTML );

}

function ShowData(){
    if(localStorage.getItem("SavedData")==null){
        SaveData()
    }
    IncompleteUl.innerHTML=localStorage.getItem("SavedData");
    completeUl.innerHTML=localStorage.getItem("SavedComoleteData");


}

ShowData()

// // SaveData()
// if(!localStorage.getItem("SavedData")==null){
//     ShowData()

// }