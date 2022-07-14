const express = require("express");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route 1: Getting all notes
var fetchuser = require("../middleware/fetchuser");
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route 2: Adding new notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title ").isLength({ min: 3 }),
    body("description", "Description must be atleast five characters").isLength(
      { min: 5 }
    ),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //if any error occurs over here,
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 3 Update an existing note: Login needed
router.put(
    "/updatenote/:id",
    fetchuser,
    async (req, res) => {
        const { title, description, tag} = req.body;
        //creating a newNote object
        const newNote ={};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};
//find the note to be updated and update it
   let note = await Note.findById(req.params.id);
   if(!note){return res.status(404).send("Not found")}

   if(note.user.toString() !== req.user.id  ){
    return res.status(401).send("Not allowed");
   }
   note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
       res.json(note);
    })
   //route4:  deleting an existing note
router.delete(
    "/deletenote/:id",
    fetchuser,
    async (req, res) => {
        const { title, description, tag} = req.body;
    //find the note to be deleted and delete it
   let note = await Note.findById(req.params.id);
   if(!note){return res.status(404).send("Not found")}
   //alow deletion if user owns the note
   if(note.user.toString() !== req.user.id  ){
    return res.status(401).send("Not allowed");
   }
   note = await Note.findByIdAndDelete(req.params.id)
       res.json({"Success" : "Note has been deleted"});
    })

module.exports = router;
