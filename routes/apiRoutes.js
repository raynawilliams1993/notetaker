var noteData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });

    app.get("/api/notes/:note", function (req, res) {
        var chosen = req.params.note;
        noteData(chosen)
        res.json(true);
    });

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);
        res.json(true);
    });

    app.delete("/api/notes/:note", function (req, res) {
        var chosen = req.params.note;
        noteData.pop(chosen);
        res.json(true)
    })




};