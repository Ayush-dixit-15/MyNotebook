const express = require('express')
const Notes = require('../models/Notes');
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
router.get('fetchallnotes', fetchuser, async (req,res)=>{
    const notes = await Notes.find({user: req.user.id})
     res.json(notes)
})

module.exports= router