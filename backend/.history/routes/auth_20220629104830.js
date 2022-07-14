const express = require('express')
const router = express.Router()
const User =   require('../models/User');
const { body, validationResult } = require('express-validator');

//creating a user using POST "/api/auth/".DOESNOT REQUIRE AUTH
//here, whatwe have used is known as express validator which validates all the input values and shows an error if any invalid input is given
router.post('/', [
  body('name','Enter a valid name ').isLength({ min:3 }),
  body('email','Enter a valid email').isEmail(),
  body('password','Paaword nust be atleast 5 characters').isLength({ min: 5 }),]
,(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      username: req.body.name,
      password: req.body.email,
    }).then(user => res.json(user));
  
    res.send(req.body);
})
 
module.exports= router