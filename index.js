const express = require("express");
const socket = require("socket.io");


const PORT = 8080;
const app = express();
app.use(express.static("public"));
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Socket setup
const io = socket(server);

// const activeUsers = new Set();
var i = 1;
io.on("connection", function (socket) {
  const User = "User" + i;
  i += 1;
  socket.on("msg", (data)=>{
    io.emit("res", {"data": data, "user": User});
  });
  // socket.on("new user", function (data) {
  //   socket.userId = data;
  //   activeUsers.add(data);
  //   io.emit("new user", [...activeUsers]);
  // });

  // socket.on("disconnect", () => {
  //   activeUsers.delete(socket.userId);
  //   io.emit("user disconnected", socket.userId);
  // });
});

app.get('/', (req, res)=>{
  res.render('index.js');
});
