const express = require('express')
const router = express.Router()
//creating a user usinf POST "/api/auth/"
router.get('/', (req,res)=>{
  console.log(req.body)
  res.send("hello")
})

module.exports= router