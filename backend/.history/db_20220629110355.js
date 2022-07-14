const mongoose = require('mongoose');
const connectToMongo = ()=> {
  mongoose.connect('mongodb://localhost:27017/mynotebook', () =>{
    console.log("connected to mongo");
  });
}

module.exports= connectToMongo;