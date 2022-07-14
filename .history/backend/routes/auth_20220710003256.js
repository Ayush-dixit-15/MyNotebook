const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = "Ayush is a good web develper"
//route1:creating a user using POST "/api/auth/".DOESNOT REQUIRE AUTH
//here, whatwe have used is known as express validator which validates all the input values and shows an error if any invalid input is given
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name ").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password nust be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // checks wether  the user with same email already exists or not
      let user = await User.findOne({ email: req.body.email });
      //it return us a user with email "email"
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this name already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      //await halts the comouting until the await function is resolved because javascript will continue to compute other lines otherwise without getting the valve of hash of the password
      const secPass = await bcrypt.hash( req.body.password, salt)
  
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        // this simply creates the user according to the schema defined in the user.js and since we have imported User.js here
      });

      // .then(user => res.json(user))
      // .catch(err=> {console.log(err)
      //   res.json({error: 'Please enter a unique value for email', message:'err.message'})})
      //   // this here tells the system what to do whenever an irregularity is found . For example whenever we will find an entry with same email as what was stored in my database, it will display this error and a message
      const data ={
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign( data, JWT_SECRET);

      res.json({authtoken});
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//route2: authenticating a user
router.post("/login",
  [
    
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;
    try{
          let user = await User.findOne({email});
          if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"})
          }

          const passwordCompare = await  bcrypt.compare(password, user.password);
          if(!passwordCompare){
            success= false
            return res.status(400).json({succes, error: "Please try to login with correct credentials"})
          }
          const data = {
            user:{
              id:user.id
            }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
           success= true; 

          res.json({success,authtoken})
    }catch(error){
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
//route 3:get loggedin user details.Login required
router.post("/getuser", fetchuser, async (req, res) => {
try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user);
} catch (error) {
  console.log(error.message);
      res.status(500).send("Internal Server Error");
}
})
module.exports = router;
