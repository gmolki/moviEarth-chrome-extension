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
	var recovered_data = JSON.parse( msg.data );
	
	switch (recovered_data.code) {
	  case codes.toUser.checkLogin:
		console.log("checkingLogin");
		if(recovered_data.isUserFound)
			changeScreen(2);
		else
			console.log("not User Found");
		break;
	  default:
		console.error( "Server could not recognize the code:\t", recovered_data.code);
	}
};

function sendMessage(data) {
  socket.send(JSON.stringify(data));
}

/*const codes = {
  newConnection: 0,
  login: 1
};*/

const codes = {
  fromUser: {
      newConnection: 0,
      login: 1
    },
    toUser: {
      checkLogin: 0,
      userAlreadyConnected: 1,
      newUserRegistered: 2,
      correctLogin: 3
    }
};
