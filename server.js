const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").mongooURI;

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log("Mongo db connected"))
  .catch(err => console.log("Mongo db error : " + err));

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server runing on port " + port));
