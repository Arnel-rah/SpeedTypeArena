

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log(" Utilisateur connecté :", socket.id);
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

server.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
