const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/api/vi/login', (req, res) => {
  res.send('Hello login!')
})
app.get('/api/vi/signup', (req, res) => {
  res.send('Hello signup')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
