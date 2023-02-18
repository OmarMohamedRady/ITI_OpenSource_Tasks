var child = document.getElementsByClassName("child");
console.log(child);

var btn= document.getElementById("next");
var btn2= document.getElementById("prev")
btn.addEventListener("click", nextStep);
btn2.addEventListener("click", prevStep);
var one = document.getElementById("one");
var three = document.getElementById("three");

function  nextStep() {

for(let i=0;i<child.length; i++)
{
    if(i==2)
    {
        if(Number(child[i].innerHTML)< 6)
           {
            child[i].innerHTML=Number(child[i].innerHTML)+1;
           } 
           else{
                child[i].innerHTML=1;
           }        
        
    }
    else{
        child[i].innerHTML=child[i+1].innerHTML;
    }
    
   
    
}
}

setInterval(function() {

for(let i=0;i<child.length; i++)
{
    if(i==2)
    {
        if(Number(child[i].innerHTML)< 6)
           {
            child[i].innerHTML=Number(child[i].innerHTML)+1;
           } 
           else{
                child[i].innerHTML=1;
           }        
        
    }
    else{
        child[i].innerHTML=child[i+1].innerHTML;
    }
    
   
    
}



}, 1000);

function  prevStep() {

for(let i=0;i<child.length; i++)
{
    if(i==2)
    {
        if(Number(child[child.length-i-1].innerHTML)> 1)
           {
            child[child.length-i-1].innerHTML=Number(child[child.length-i-1].innerHTML)-1;
           } 
           else{
                child[child.length-i-1].innerHTML=6;
           }        
        
    }
    else{
        child[child.length-i-1].innerHTML=child[child.length-i-2].innerHTML;
    }
    
   
    
}
}
