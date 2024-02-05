const mongoose = require('mongoose');
require('dotenv').config();

//Define mongoDB connection URL

//local url
// const mongoURl = 'mongodb://localhost:27017/hotelDB'
// const mongURL = process.env.MongoDB_URL_LOCAL

//hosted url on mongoDB atlas.
const mongoURl = process.env.MongoDB_URL;

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
