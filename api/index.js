const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res, next) => {
  const ideas = require("./ideas.json");
  const keys = Object.keys(ideas);
  const randIndex = Math.floor(Math.random() * keys.length);
  const randKey = keys[randIndex];
  const idea = ideas[randKey];
  res.send(idea);
});

app.get("/5min", (req, res, next) => {
  res.send("Hi there");
});

app.listen(4000, () => {
  console.log("Listen on the port 4000...");
});
