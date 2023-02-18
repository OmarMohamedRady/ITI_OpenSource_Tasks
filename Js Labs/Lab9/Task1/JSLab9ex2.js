function updateWatch(){
    var watch = document.getElementById("watch");
    watch.innerHTML = (new Date()).toLocaleTimeString();
}
setInterval(updateWatch,1);
var set=document.getElementById("setAlarm");
var popUp=document.getElementById("popUp");
var clear=document.getElementById("clear");
var setA=document.getElementById("set")
var hrs=document.getElementById("hrs");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
set.addEventListener("click",function(){popUp.style.display="flex"});
clear.addEventListener("click",clearAlarm);
setA.addEventListener("click",setAlarm);
function setAlarm() {
    period = Number(
      (Number(sec.value) + Number(min.value) * 60 + Number(hrs.value * 3600)) *
        1000
    );
  
    setTimeout(startAlarm, period);
    start = new Date().toLocaleTimeString();
  
    clearAlarm();
  }
  function startAlarm() {
    alert(
      `Alarm
      From: ${start} To: ${new Date().toLocaleTimeString()}
        Period: ${period/1000} s`
    );
  }
  function clearAlarm(){
    popUp.style.display="none";
    sec.value="0";hrs.value="0";
    min.value="0";
};


