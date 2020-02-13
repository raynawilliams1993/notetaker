  
const express = require("express");
var path = require("path");
var fs = require("fs");

// file structure to be /api/notes
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.create
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);



app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})