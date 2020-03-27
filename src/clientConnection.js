var socket = new WebSocket("wss://ecv-etic.upf.edu/node/9010/ws/");

socket.onopen = function() {
  console.log("Socket has been opened! :)");
  alertConnection.style.display = "none";
  succesfullyConnected = true;
  for(var i = 0; i < pendingFunctions.length; i++)
  {
	  pendingFunctions[i].executeFun(pendingFunctions[i].parameter);
  }
  //waitForServerConnectionResponse();
};

socket.onclose = function(event) {
  console.log("Socket has been closed:\t", event);
  succesfullyConnected = false;
};

socket.onerror = function(error) {
  console.log("Error produced:\t", error);
  hideAllAlerts();
  alertConnection.style.display = "block";
  succesfullyConnected = false;
};

socket.onmessage = function(msg) {
	console.log("Received:\t" + msg.data);
	var recovered_data = JSON.parse( msg.data );
	
	switch (recovered_data.code) {
	  case codes.toUser.checkLogin:
		console.log("checkingLogin");
		if(recovered_data.isUserFound)
			changeScreen(screenCodes.userTypeScreen);
		else
			console.log("not User Found");
		break;
	  case codes.toUser.checkRegistration:
		console.log("checkingRegistration");
		console.log(recovered_data.userRegistration);
		break;
	  case codes.toUser.sendSceneLocations:
		console.log("receiving scene locations");
		activateMarkers(recovered_data.movie, recovered_data.sceneLocations);
		break;
	  default:
		console.error( "Server could not recognize the code:\t", recovered_data.code);
	}
};


function sendMessage(data) {
  socket.send(JSON.stringify(data));
}

const codes = {
  fromUser: {
      newConnection: 0,
      login: 1,
	  createAccount: 2,
	  requestMovieInfo: 3,
	  sendSceneInfo: 4
    },
    toUser: {
      checkLogin: 0,
	  checkRegistration: 1,
      sendSceneLocations: 2
    }
};
