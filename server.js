// importing dependencies to interact with the front end
const express = require("express");
const path = require("path");
const fs = require("fs");

// creating a server
const app = express();

// Setting a port listener
const PORT = 3000;

// HTML GET Requests

// when the Get started button is clicked display the note.html Web page 
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// If no matching route is found, then default to home
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/api/notes", function (req, res) {
  return res.sendFile(path.json(__dirname, "db/db.json"));
});

// Start the server on the port
app.listen(PORT, function () {
  console.log("SERVER IS LISTENING: " + PORT);
});