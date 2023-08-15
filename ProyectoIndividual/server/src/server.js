const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
//First changes for commits
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
