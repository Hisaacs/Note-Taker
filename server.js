// import dempendencies to interact with front end
const express = require('express');
// need filename path
const path = require('path');
// require fs to read and write to files
const fs = require('fs');

// this will create and express server
const app = express();

// setting the initial PORT listner
const PORT = 3000

// creating an array for notes data
 const noteData = [];


// setting express middleware to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('./assets'));

// here we set up routes


// Listening

app.listen(PORT, function() {
    console.log(`Listneing on PORT ${ PORT }`);
});