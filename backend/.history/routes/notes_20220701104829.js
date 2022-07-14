const express = require("express");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route 1: Getting all notes
var fetchuser = require("../middleware/fetchuser");
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
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

module.exports = router;
