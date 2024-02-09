function lg()
{
  var nme=document.getElementById("name").value;
  if (nme == "8849478730") {
    alert("You are Logged in successfully");
    window.location="index.html";
  } else {
    alert("Phone number incorrect");
    window.location="login.html";
  }
}