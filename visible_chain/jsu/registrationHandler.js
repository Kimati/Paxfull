
function handleRegistration() {
    console.log("Handling Reg form....");
    let trashData = document.getElementById("registrationForm");
    let loginData = {};
    trashData.addEventListener("submit", (z) => {
      z.preventDefault();
  
      let phone = document.getElementById("trashPhone").value;
      let password = document.getElementById("trashPassword").value;
      regData = {username:username,password:password};
      alert("Phone is: " + phone + " and password is " + password);
    });
  
    //Send creds to z server - Using the fetchAPI (promise based API)
    fetch("backendApiUrl", {
      method: "POST",
      body: JSON.stringify(regData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  