var email = document.getElementById("email").value;
var pass = document.getElementById("passwd").value;
async function login() {
  var email = document.getElementById("email").value; // eve.holt@reqres.in
  var pass = document.getElementById("passwd").value; // omar
  var out = document.getElementsByClassName("output")[0];

  var bodyObj = {
    email: email,
    password: pass,
  };

  var resObj = await fetch("https://reqres.in/api/login", {
    method: "post",
    body: JSON.stringify(bodyObj),
    headers: {
      "content-type": "application/json",
    },
  });

  var bodyObj = await resObj.json();

  if (bodyObj.token) {
    localStorage.mytoken = bodyObj.token;
    if (pass == "omar") {
      out.style.visibility = "visible";
      out.style.backgroundColor = "Green";
      out.innerHTML = "Welcome login success";
      alert(localStorage.mytoken);
    } else {
      out.style.visibility = "visible";
      out.style.backgroundColor = "red";
      out.innerHTML = "Error || Incorrect Password";
    }
  } else {
    out.style.visibility = "visible";
    out.style.backgroundColor = "red";
    out.innerHTML = "Error || Incorrect Email or Password";
    alert(bodyObj.error);
  }
}

function validateEmail(e) {
  if (validateEmailRegex(e.target.value)) {
  } else {
    alert("Email not valid please correct it");
    document.getElementById("email").value = "";
  }
}
const validateEmailRegex = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
