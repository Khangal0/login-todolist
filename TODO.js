const addButton = document.getElementById("add");
const input = document.getElementById("input");
const todoListContainer = document.getElementById("list");

input.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
})
 
addButton.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue.length == 0) {
    alert("hoosn bn");
    return;
  }
 
  const todoContainer = document.createElement("div");
  todoContainer.style.color = "white";
 
  todoContainer.innerHTML = inputValue;
 
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.style.fontSize = "17px"
  deleteButton.style.marginLeft = "5px";
  deleteButton.style.border = "2px solid #8707ff"
 
  todoContainer.appendChild(deleteButton);
  todoListContainer.appendChild(todoContainer);
 
  const editButton = document.createElement("button");
  editButton.style.fontSize = "17px"
  editButton.innerHTML = "edit";
  editButton.style.border = "2px solid #8707ff"
 
  const editInput = document.createElement("input");
  const editinputValue = editInput.value;
  editInput.style.fontSize = "17px"
  editInput.value = ""  

  const doneButton = document.createElement("button");
  doneButton.style.fontSize = "17px"
  doneButton.innerHTML = "done";
 
  todoContainer.appendChild(editButton);
  todoListContainer.appendChild(todoContainer);
 
  const completebutton = document.createElement("button");
  completebutton.style.fontSize = "17px"
  completebutton.innerHTML = "complete";

  const completedlist = document.getElementById("completed");
  completebutton.style.border = "2px solid #8707ff"
 
  todoContainer.appendChild(completebutton);
 
  deleteButton.addEventListener("click", function () {
    todoContainer.remove();
    editInput.remove();
    doneButton.remove();
    completebutton.remove();
  });
 
  editButton.addEventListener("click", function () {
    todoListContainer.appendChild(editInput);
    todoListContainer.appendChild(doneButton);
  });
 
  doneButton.addEventListener("click", function () {
    todoContainer.innerHTML = editInput.value;
    todoContainer.appendChild(deleteButton);
    todoContainer.appendChild(editButton);
    todoContainer.appendChild(completebutton);  
    editInput.remove();
    doneButton.remove();
  });
 
  completebutton.addEventListener("click", function () {
    completedlist.appendChild(todoContainer)
    completebutton.remove();
    editButton.remove(); 
  }); 
  input.value = ""
}); 