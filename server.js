// Require express package
const express = require("express");

// Create the express server
const app = express();

// Set initial port
const PORT = process.env.PORT || 3001;

// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

// Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});