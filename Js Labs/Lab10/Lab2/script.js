var btn = document.getElementById("btn");
var tasks = document.getElementById("tasks");
var taskText = document.getElementById("taskText");
btn.addEventListener("click", addTask);
if (localStorage.getItem("myTasks") != null) {
  tasks.innerHTML = localStorage.getItem("myTasks");
}
tasks.style.b;
document.addEventListener("click", taskDone);
document.addEventListener("click", taskDelete);
function addTask() {
  if (taskText.value == "") return;
  var newDiv = document.createElement("div");
  newDiv.classList.add("taskContainer");
  newDiv.innerHTML = `<h3 id = "content"></h3> 
                       <div>
                       <button type="button" class="taskFinish"> &#x2714;</button>
                       <button type="button" class ="taskRemove" >X</button>
                       </div> `;
  newDiv.children[0].innerHTML = taskText.value;
  newDiv.style.marginBottom = "10px";
  tasks.appendChild(newDiv);
  taskText.value = "";
  localStorage.setItem("myTasks", tasks.innerHTML);
}

function taskDone(e) {
  let tar = e.target;
  if (e.target.classList.contains("taskFinish")) {
    let inptxt = tar.parentElement.previousElementSibling;
    if (inptxt.innerHTML == "omar completed") return;
    inptxt.innerHTML += " completed";
    inptxt.parentElement.style.background = "green";
    localStorage.setItem("myTasks", tasks.innerHTML);
  }
}

function taskDelete(e) {
  let tar = e.target;
  if (e.target.classList.contains("taskRemove")) {
    let inptxt = tar.parentElement.parentElement;
    inptxt.remove();
    localStorage.setItem("myTasks", tasks.innerHTML);
  }
}
