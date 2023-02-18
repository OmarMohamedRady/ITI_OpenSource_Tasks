var d = document.getElementById("d");
var d1= document.getElementById("d1");
var form=document.getElementById("form");
var fname=document.getElementById("fname");
var btn = document.getElementById("btn");
d1.style.display="flex";
d1.style.height="95vh";
d1.style.flexDirection="row";
d1.style.justifyContent="center";
d1.style.alignItems="center";

d.style.display="flex";
d.style.flexDirection="column";
d.style.backgroundColor="rgb(224,224,224)";
d.style.alignItems="center";
d.style.width="35%";
d.style.minHeight="200px";

form .style.marginTop="8px";
form.style.display="block";
fname.style.width="300px";
fname.style.height="30px";
fname.style.border="1px solid black";
fname.style.borderRadius="10px";


btn.style.marginLeft="10px";
btn.style.width="100px";
btn.style.height="35px";
btn.style.backgroundColor="rgb(0,76,153)";
btn.style.color="white";
btn.style.border="1px solid gray";
btn.style.borderRadius="10px";



function addElement(e) {
e.preventDefault();
var text = fname.value;  

var node = document.createElement("div");
var node1 = document.createElement("div");
var h= document.createElement("h");
var textnode = document.createTextNode(text);
 var x = document.createElement("BUTTON");
var t = document.createTextNode("x");
x.appendChild(t);
tr= document.createElement("BUTTON");
var t1 = document.createTextNode("ok");
tr.appendChild(t1);

x.style.width="50px";
tr.style.width="50px";
x.style.height="20px";
tr.style.height="20px";
x.style.marginLeft="8px";
tr.style.marginLeft="8px";
x.style.backgroundColor="rgb(255,51,51)";
tr.style.backgroundColor="rgb(0,255,0)";
tr.style.border="1px solid gray";
x.style.border="1px solid gray";
x.style.borderRadius="10px";
tr.style.borderRadius="10px";

x.onclick = function () {
   node.parentNode.removeChild(node);
}

tr.onclick = function () {
 
    
    node.style.backgroundColor="rgb(153,255,153)";
 
    var node3 = document.createElement("h");
    var textnode2 = document.createTextNode(text +" Task completed");
    node3.appendChild(textnode2);
    node.replaceChild(node3, h);
   
    
}


h.appendChild(textnode);
node1.appendChild(tr);
node1.appendChild(x);

node.appendChild(h);
node.appendChild(node1);

d.appendChild(node);

node.style.width="100%";
node.style.display="flex";
node.style.flexDirection="row";
node.style.justifyContent="space-between";
node.style.marginTop="10px";


}

function remove(e){
    e.preventDefault();
    console.log("Hi");
}
document.getElementById("btn").onclick =addElement;


