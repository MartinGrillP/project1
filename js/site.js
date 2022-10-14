
function checkRequirements(event) {
  var name = document.forms["newsLetter"]["name_field"].value;
  var email = document.forms["newsLetter"][email_field].value;
  
  if (name == "" and email == "") {
    document.getElementById("error").style.display = "inline";
  } else {
    alert("Sign up successful")
  }
}