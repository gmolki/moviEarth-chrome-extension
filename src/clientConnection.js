var socket = new WebSocket("wss://ecv-etic.upf.edu/node/9010/ws/");

socket.onopen = function() {
  console.log("Socket has been opened! :)");
};

socket.onclose = function(event) {
  console.log("Socket has been closed:\t", event);
};

socket.onerror = function(error) {
  console.log("Error produced:\t", error);
};

socket.onmessage = function(msg) {
  console.log("Received:\t" + msg.data);

  var recovered_msg = JSON.parse(msg.data);
  console.log(recovered_msg);

  switch (recovered_msg.code) {
    case codes.fromServer.loginChecked:
      onLoginChecked(recovered_msg.data);
      break;

    default:
      console.log("Server could not recognize the code:\t", recovered_msg.code);
  }
};

function sendMessage(data) {
  socket.send(JSON.stringify(data));
}

function onLoginChecked(loginResponse) {
  switch (loginResponse.code) {
    case codes.fromServer.userAlreadyConnected:
      console.log("That username is being used right now bro!");
      break;
    case codes.fromServer.newUserRegistered:
      console.log("Welcome to moviEarth! ^o^");
      break;
    case codes.fromServer.correctLogin:
      console.log("Welcome back to moviEarth! ^o^");
      break;
    default:
      console.log("Unexpected error caused in the server! :(");
      break;
  }
}

const codes = {
  toServer: {
    newConnection: 0,
    login: 1
  },
  fromServer: {
    loginChecked: 0,
    userAlreadyConnected: 1,
    newUserRegistered: 2,
    correctLogin: 3
  }
};
