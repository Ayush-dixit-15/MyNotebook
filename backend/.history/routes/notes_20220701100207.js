const express = require("express");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Route 1: Getting all notes
var fetchuser = require("../middleware/fetchuser");
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

//Route 2: Adding new notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title ").isLength({ min: 3 }),
    body("description", "Description must be atleast five characters").isLength({ min:5 }),
  ],
  async (req, res) => {
    res.json(notes);
  }
);

module.exports = router;
