const socket = io();
const msgbox = document.getElementById("msg");
const showmsg = document.getElementById("show");

function send() {
  const msg = msgbox.value;
  socket.emit("msg", msg);
  msgbox.value = "";
  return false;
}

socket.on("res", (data)=>{
  showmsg.innerHTML += ("</br>" + data["user"] + ":" + data["data"]);
});























// socket.on("Hello", (data)=>{
//   console.log(data);
// });

// socket.emit("Bye", ["Hello", "Bye"]);
// const inboxPeople = document.querySelector(".inbox__people");

// let userName = "";

// const newUserConnected = (user) => {
//   userName = user || `User${Math.floor(Math.random() * 1000000)}`;
//   socket.emit("new user", userName);
//   addToUsersBox(userName);
// };

// User_1 --> Hello --> server {msg: "Hello", reciever: User_2}


// Online:
// User_2

// Offline:
// User_2

// const addToUsersBox = (userName) => {
//   if (!!document.querySelector(`.${userName}-userlist`)) {
//     return;
//   }

//   const userBox = `
//     <div class="chat_ib ${userName}-userlist">
//       <h5>${userName}</h5>
//     </div>
//   `;
//   inboxPeople.innerHTML += userBox;
// };

// // new user is created so we generate nickname and emit event
// newUserConnected();

// socket.on("new user", function (data) {
//   data.map((user) => addToUsersBox(user));
// });

// socket.on("user disconnected", function (userName) {
//   document.querySelector(`.${userName}-userlist`).remove();
// });
