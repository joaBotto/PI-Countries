const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./db.js");

const server = express();
server.name = "API";
server.use(morgan("dev"));
server.use(cookieParser());
server.use(express.json({ limit: "50mb" })); //Middleware para procesar json en las solicitudes
server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/", router);
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
module.exports = server;
