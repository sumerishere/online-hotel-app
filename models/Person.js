const mongoose = require('mongoose');


//define the person schema with validation.

const persionSchema = new mongoose.Schema({
  name:{
    type: String, 
    required:true
  },
  age:{
    type: Number,
    required: true
  },
  salary:{
    type: Number,
    required: true
  },
  work:{
    type: String,
    //mandatory options from user to accept strictly.
    enum: ['chef', 'waiter', 'manager'],
    required: true
    },
    mobile:{
      type: String, 
      required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    address:{
      type: String,
      required: true
    }
});

//create person model.
const Person = mongoose.model('Person', persionSchema);

module.exports = Person;
