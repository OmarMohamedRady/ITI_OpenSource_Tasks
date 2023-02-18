var btn = document.getElementById("btn");

$("body").css("background", "green ");
$("#btn").on("click", function () {
  if ($("#taskText").val() == "") return;
  
  var newDiv = `<div class = "taskContainer"><h3 id = "content"> ${$(
    "#taskText"
  ).val()}</h3> 
  <div>
  <button type="button" class="taskFinish"> &#x2714;</button>
  <button type="button" class ="taskRemove" >X</button>
  </div></div>`;

  $("#tasks").append(newDiv);
  $("#taskText").val() = "";
  
});

$("#tasks").on("click",".taskRemove",{},function(e){
    $(this).parent().parent().remove();
 })

 $("#tasks").on("click",".taskFinish",{},function(e){
  $(this).parent().parent().css("background-color" ,"green");
})




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

