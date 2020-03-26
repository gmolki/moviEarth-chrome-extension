// var username = document.getElementById("inputUsername");

// document.getElementsByClassName("form-signin");

// document.getElementById("signin-button").onclick = function() {

// };

// function submitLogin() {
//   var username = document.forms["signIn"]["username"];
//   console.log(document.forms["signIn"]["rememberMe"].checked);
// }

// document.getElementById("signin-button").onclick = function() {
//   submitLogin();
// };

function onCreatingNewAccount()
{
	changeScreen(screenCodes.SignUpScreen);
}

window.addEventListener("load", function() {
	
  //LOGIN
  let signIn = document.forms["signIn"];

  signIn.addEventListener("submit", function(event) {
    var username = signIn["username"].value;
    var rememberMe = signIn["rememberMe"].checked;

    var message = {
      code: codes.fromUser.login,
      username: username,
      rememberMe: rememberMe
    };
    sendMessage(message);

    event.preventDefault();
  });
  
  
  //CREATE ACCOUNT
  var createNewAccount = document.getElementById('newAccount');
  createNewAccount.addEventListener("click", onCreatingNewAccount );
  
  let signUp = document.forms["signUp"];
  
  signUp.addEventListener("submit", function(event) {
    var username = signUp["username"].value;

    var message = {
      code: codes.fromUser.createAccount,
      username: username
    };
    sendMessage(message);

    event.preventDefault();
  });
});
