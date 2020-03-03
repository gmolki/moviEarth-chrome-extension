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

window.addEventListener("load", function() {
  let signIn = document.forms["signIn"];

  signIn.addEventListener("submit", function(event) {
    var username = signIn["username"].value;
    var rememberMe = signIn["rememberMe"].checked;

    var message = {
      code: codes.login,
      username: username,
      rememberMe: rememberMe
    };
    sendMessage(message);

    event.preventDefault();
  });
});
