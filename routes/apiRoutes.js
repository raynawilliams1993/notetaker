const path = require("path");
const fs = require("fs");
const uuidv4 = require('uuid/v4');


module.exports = function(app) {

    // Need to determine what req.body will look like
    app.post("/api/notes", function(req, res) {
        let file = path.join(__dirname , "../db/db.json");
        const notesArr = require(file);
        let note = req.body;
        note.id = uuidv4();
        let notes = [];
        if (Object.keys(notesArr).length !== 0) {
            notes = notesArr.slice();
        };
        notes.push(note);
        // Await functionality?
        fs.writeFile(file, JSON.stringify(notes, null, 2), err => {
            if (err) throw err;
        });
        res.send(note);
    });
    app.get("/api/notes", function(req, res) {
        let notesArr = require("../db/db.json");
        res.json(notesArr);
    });
    app.delete("/api/notes/:id", function(req, res) {
        let file = path.join(__dirname , "../db/db.json");
        const notesArr = require(file);
        let notes = notesArr.slice()
        let deleteNoteId = req.params.id;
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === deleteNoteId) {
                notes.splice(i, 1);
                break;
            };
        };
        // Await functionality?
        fs.writeFile(file, JSON.stringify(notes, null, 2), err => {
            if (err) throw err;
            res.send(notes);
        });
    })




}