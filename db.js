const mongoose = require('mongoose');

//Define mongoDB connection URL
const mongoURl = 'mongodb://localhost:27017/hotelDB'
  //where hotelDB -->   own DB name.

mongoose.connect(mongoURl, {
  useNewUrlParser:true,
  useUnifiedTopology:true
});


//responsible default connection obj for interaction of any data with db 
// helps to estabilish bridge betwn MongoDB & Node.js
const db = mongoose.connection; 


// .on define event listeners for DB connection
// can console custom msg to get db status.

db.on('connected',() => {
  console.log('COnnected to MongoDB server successfully.')
  });

db.on('Error',(err) => {
  console.error('MongoDB connection error!',err)
});

db.on('disconnected',() => {
  console.log('MongoDB disconnected.')
});

//Export Database connection
module.exports = db;