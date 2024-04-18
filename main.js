
let newTask = document.querySelector('#new-task'); //get new task input elemnt
let form = document.querySelector('form'); //get new task form
let IncompleteUl = document.querySelector('#items'); //get incomplete UL
let completeUl = document.querySelector('.complete-list ul'); // Get complete UL


let createTask =function(taskname){
    let listItem = document.createElement("li")
    let label = document.createElement("label");
    let checkBox = document.createElement('input');
  

    checkBox.type ="checkbox";

    label.innerText = taskname;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addtask= function(){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    IncompleteUl.appendChild(listItem);
    newTask.value="";
    InCompleteItemsBind(listItem);
}


let InCompleteItemsBind = function(listItem){
    let checkBox = listItem.querySelector('input[type="checkbox"]')
    // checkBox.onchange = completeTask;
    // checkBox.addEventListener("change", completeTask);
    checkBox.setAttribute("onchange", "completeTask(this)");
}

let completeTask = function(item){
    let listItem = item.parentNode;
    console.log(listItem);
    let deletebtn = document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("delete");
    listItem.appendChild(deletebtn);
    item.remove();
    completeUl.appendChild(listItem);
    CompleteItemsBind(listItem);

}



let CompleteItemsBind = function(listItem){
    let deletebtn = listItem.querySelector('.delete')
    deletebtn.onclick = deleteTask;

}

let deleteTask = function(){
    let listItem = this.parentNode;
    completeUl.removeChild(listItem);
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

