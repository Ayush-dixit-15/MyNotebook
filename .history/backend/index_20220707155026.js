const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
// it is a middleware used to get the body of the request 

//routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`MyNotebook app listening on port ${port}`)
})
