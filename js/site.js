
function checkRequirements() {
  
  var name = document.forms["newsLetter"]["name_field"].value;
  var email = document.forms["newsLetter"]["email_field"].value;
  
  if ((name == "") && (email == "")) {
    document.getElementById("error").style.display = "block";
  } else {
    alert("Sign up successful");
  }
}