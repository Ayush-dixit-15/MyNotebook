const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
router.get('fetchallnotes', fetchuser, (req,res)=>{
     res.json([])
})

module.exports= router