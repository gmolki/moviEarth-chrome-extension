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
};

function sendMessage(data) {
  socket.send(JSON.stringify(data));
}

const codes = {
  newConnection: 0,
  login: 1
};
