const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const calc = require("./calc");

const app = express();
const server = http.createServer(app);
const socket = new WebSocket.Server({ server });

app.use(express.static("./static"));

socket.on("connection", (ws) => {
  ws.on("message", (message) => {
    ws.send(splitMessage(String(message)));
  });
});

const splitMessage = (message) => {
  const messageArray = message.split(" ");
  return doCalculation(messageArray);
};

const doCalculation = (message) => {
  switch (message[1]) {
    case "+":
      return calc.add(parseInt(message[0]), parseInt(message[2]));
    case "-":
      return calc.sub(parseInt(message[0]), parseInt(message[2]));
    case "*":
      return calc.mult(parseInt(message[0]), parseInt(message[2]));
    case "/":
      return calc.div(parseInt(message[0]), parseInt(message[2]));
  }
};

server.listen(process.env.PORT || 7000, () => {
  console.log("Server listening on:", server.address().port);
});
