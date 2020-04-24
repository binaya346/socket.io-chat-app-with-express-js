const socket = io.connect("http://localhost:4000");

//DOM
const message = document.getElementById("message");
const username = document.getElementById("username");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const broadcast = document.getElementById("broadcast");

//Emit data to socket

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    username: username.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", username.value);
});

//Listen for socket data
socket.on("chat", (data) => {
  broadcast.innerHTML = "";
  output.innerHTML +=
    "<p><span>" + data.username + ":</span>" + data.message + "</p>";
});
socket.on("typing", (data) => {
  broadcast.innerHTML = "<p><em>" + data + " is typing message" + "</em></P>";
});
