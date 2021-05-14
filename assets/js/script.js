var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

// buttonEl.addEventListener("click", function(){
//     alert("button clicked");
// });

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

buttonEl.addEventListener("click", createTaskHandler);