const express = require("express");
const cors = require("cors");
const restoController = require("./controllers/resto-controller");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", restoController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));

