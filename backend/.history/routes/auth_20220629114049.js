const express = require('express')
const router = express.Router()
const User =   require('../models/User');
const { body, validationResult } = require('express-validator');

//creating a user using POST "/api/auth/".DOESNOT REQUIRE AUTH
//here, whatwe have used is known as express validator which validates all the input values and shows an error if any invalid input is given
router.post('/createuser', [
  body('name','Enter a valid name ').isLength({ min:3 }),
  body('email','Enter a valid email').isEmail(),
  body('password','Paaword nust be atleast 5 characters').isLength({ min: 5 }),]
,(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)     
      res.json({error: 'Please enter a unique value for email', message:'err.message'})})
      // this here tells the system what to do whenever an irregularity is found . For example whenever we will find an entry with same email as what was stored in my database, it will display this error and a message 
})
 
module.exports= router