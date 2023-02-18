var container = document.getElementById("container");
async function getText(url) {
  let x = await fetch(url);
  let data = await x.json();
  console.log(data.data);
  for (let i = 0; i < data.data.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("content");
    newDiv.innerHTML = `<div class ="photo" "> <img height ="120px"> </div>
                                <h5 class = "text" ></h5>  `;
    newDiv.children[0].children[0].setAttribute("src", data.data[i].avatar);

    newDiv.children[1].innerHTML = data.data[i].email;
    container.appendChild(newDiv);
  }
}
/* var btn = document.getElementById("btn");
    var btn1 = document.getElementById("btn1");
    var txt = document.getElementsByClassName("txt");
    var f = document.getElementById("f");
    var email = document.getElementById("email");
 
    async function getText(url) {
      let x = await fetch(url);
      let y = await x.json();
      console.log(y.data);
      
      for (let i = 0; i < y.data.length; i++) {
       
        txt[i].children[0].setAttribute("src", y.data[i].avatar);
        txt[i].children[1].innerHTML = y.data[i].email;
        
      }
     
    }
*/
getText(" https://reqres.in/api/users?page=2");
