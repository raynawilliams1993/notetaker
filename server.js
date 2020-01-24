// Dependencies
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var fs = require("fs");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html")); //this is to help add to the array,directs to the add html.
});

//create 3 api routes one gets the data from db.json, one gets and creates data and posts it to db.json, one that deletes based off of id.

module.exports = function (app) {

    app.post("/api/notes", function (req, res) {
        note = JSON.stringify(req.body);
        console.log(note);
        console.log(path.join(__dirname, "../db/db.json"))
        fs.appendFileSync(path.join(__dirname, "../db/db.json"), note, err => {
            if (err) throw err;
            console.log("Wrote to db.json")
        });
        res.send(true);
        // New comment line
    });
    app.get("/api/notes", function (req, res) {
        console.log(notes)
        res.json(notes);
    });
}

//figure out a way to keep track of id's in db.json and create new ids are unique (hotresturaunt)
// $("#add-btn").on("click", function(event) {
	//       event.preventDefault();//keeps the page from refreshing.
	//         name: $("#name").val().trim(),
	//         role: $("#role").val().trim(),
	//         age: $("#age").val().trim(),
	//         forcePoints: $("#force-points").val().trim()
	//       };
	//       // Question: What does this code do??
	//       $.post("/api/characters", newCharacter)
	//         .then(function(data) {
	//           console.log("add.html", data);
	//           alert("Adding character...");	
	//         });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
