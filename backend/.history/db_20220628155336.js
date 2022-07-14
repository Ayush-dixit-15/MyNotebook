const mongoose = require('mongoose');


main().catch(err => console.log(err));

const connectToMongo = ()=> {
  mongoose.connect('mongodb://localhost:27017/test', () =>{
    console.log("connected to mongo");
  });
}

module.exports= connectToMongo;