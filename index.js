const express = require("express");
const app = express();
const socket = require("socket.io");

app.use(express.static("public"));

const server = app.listen(4000, () => {
  console.log("Connected to the port 4000");
});

const io = socket(server);

io.on("connection", (socket) => {
  console.log("Made socket connection", socket.id);
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
});
