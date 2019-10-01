const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const routes = require("./routes");

const app = express();

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros. URL "?idade=24")

// req.params = Acessar route params (para edição, delete. URL "user/1")

// req.body = Acessar corpo da requisição (para criação, edição. "{propriedade:valor}")

const server = require("http").Server(app);
// const io = require('socket.io')(server);

// const connectedUsers = {};

// io.on('connection', socket => {
//   const { user } = socket.handshake.query;

//   connectedUsers[user] = socket.id;
// })

mongoose.connect(
  "mongodb+srv://joel:omnistack@cluster0-jqq22.mongodb.net/omnistack9?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// app.use((req, res, next) => {
//   req.io = io;
//   req.connectedUsers = connectedUsers;

//   return next();
// });

// app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
