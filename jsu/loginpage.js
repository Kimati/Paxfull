// console.log("In login page jssssss");
function handleLoginForm() {
  console.log("Handling login form....");
  let trashData = document.getElementById("loginForm");
  let loginData = {};
  trashData.addEventListener("submit", (z) => {
    z.preventDefault();

    let username = document.getElementById("trashUserName").value;
    let password = document.getElementById("trashPassword").value;
    loginData = {username:username,password:password};

    alert("Username is: " + username + " and password is " + password);
  });

  //Send creds to z server - Using the fetchAPI (promise based API)
  fetch("backendApiUrl", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
