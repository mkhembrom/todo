const route = require('express').Router();
const Note = require('../models/Note');
const { nanoid } = require('nanoid');

route.get("/", async (_, res) => {
    const notes = await Note.find();
    res.json(notes);
});

route.post("/add", async (req, res) => {
    
    const { userId, title, content } = req.body;
    
    try {
        await Note.findOneAndDelete({title: req.body.title});
        
        const newNote = new Note({
            id: nanoid(),
            userId,
            title,
            content
        });
        await newNote.save();
    } catch (err) {
        console.log(err);
    }

    res.json({message: "New note Created!"});
});

route.get("/:userId", async (req, res) => {
    try {

        const note = await Note.find({ userId: req.params.userId });
        res.json(note);
    } catch (err) {
        console.log(err);
    }
});

route.delete("/delete", async (req, res) => {

    const { id } = req.body
    try {

        await Note.deleteOne({ id });
        res.json("Deleted Successfully");
    } catch (err) {
        console.log(err);
    }
});

module.exports = route;