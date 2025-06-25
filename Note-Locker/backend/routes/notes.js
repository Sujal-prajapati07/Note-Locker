const express=require('express');
const router=express.Router();
// const { Schema } = mongoose;
// const mongoose = require('mongoose');
var fetchUser = require('../middleware/fetchUser');
const Notes=require('../models/Notes');
const { body, validationResult } = require('express-validator');
//ROUTE 1:Get all the notes using:GET "/api/notes/fetchallnotes".Login required
// router.get('/fetchallnotes',fetchuser, async(req,res)=>{
//     const notes=await Notes.find({user:req.user.id});
//     res.json(notes);
// })
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Add a new note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        });

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: update and exciting note using: PUT "/api/notes/updatenote". Login required
// router.put('/updatenote/:id', fetchUser, async (req, res) => {
//     const {title, description, tag} = req.body; 
//     //new note object
//     const newNote={};
//     if(title){newNote.title=title};
//     if(description){newNote.description=description};
//     if(tag){newNote.tag=tag};

//     //find the note to be updated and update it
//     let note=await Notes.findById(req.params.id);
//     if(!note){return res.status(404).send("Not Found")};

//     if(note.user.toString()!==req.user.id){
//         return res.status(401).send("Not Allowed");
//     }

//     note=await Notes.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
//     res.json({note});
// })
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Create a new note object
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;

        // Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Check if the user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // Update the note
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// ROUTE 4: Delete and exciting note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        // Find the note to be deleted
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;