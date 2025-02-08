

require('dotenv').config(); // Load environment variables from .env file
let express = require('express');
let app = express();

// Serve the index.html file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

// Serve static files from the /public directory
app.use("/public", express.static(__dirname + "/public"));

// Handle the /json route

app.get("/json", (req, res) => {
    let message = "Hello json"
  if ( process.env.MESSAGE_STYLE==='uppercase') {
      message = message.toUpperCase();
  }
  res.json({message})
});

// Export the app for testing purposes
module.exports = app;