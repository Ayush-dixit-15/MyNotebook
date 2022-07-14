const express = require('express')
const router = express.Router()
const User =   require('../models/User');
const { body, validationResult } = require('express-validator');

//creating a user usinf POST "/api/auth/".DOESNOT REQUIRE AUTH
router.post('/', [
  body('name').isLength({ min:3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),]
,(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
})
 
module.exports= router