function validateForm() {
  console.log("Validating form...");
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  
  if (fullname.length < 5) {
    alert("Full Name must be at least 5 characters long");
    return false;
  }
  
  if (email.indexOf("@") == -1) {
    alert("Email must contain the @ character");
    return false;
  }
  
  if (phone == "123456789") {
    alert("Phone Number cannot be 123456789");
    return false;
  }
  
  if( (phone.length != 10) && (phone.length>10)) {
    alert("Phone Number must be 10 digits long");
    return false;
  }
  
  if (password == "password" || password == fullname.toLowerCase()) {
    alert("Password cannot be 'password' or your name");
    return false;
  }
  
  if (password != confirmpassword) {
    alert("Password and Confirm Password must match");
    return false;
  }
  
  return true;
}

