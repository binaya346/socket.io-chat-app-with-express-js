const socket = io.connect("http://localhost:4000");

//DOM
const message = document.getElementById("message");
const username = document.getElementById("username");
const btn = document.getElementById("send");
const output = document.getElementById("output");

//Emit data to socket

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: username.value,
  });
});

//Listen for socket data
socket.on("chat", (data) => {
  output.innerHTML +=
    "<p><span>" + data.handle + ":</span>" + data.message + "</p>";
});
