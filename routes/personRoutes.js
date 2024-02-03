const express = require('express');
const router = express.Router();
const Person = require('../models/Person');


//POST route to add a person.
router.post('/', async(req, res) => {

  try {

    //asssuming req.body contains data.
    const data = req.body;

    const newPerson = new Person(data); //simply pass data
    
    // save the new person to the database.
    const response = await newPerson.save();
    console.log('data saved successfully!');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server Error '});
  }
})


router.get('/', async(req, res) => {

  try{
    const data = await Person.find();
    console.log('Data Fetched')
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server Error '});
  }
})


router.get('/:workerType', async(req, res) => {
  
  try{
    const workerType = req.params.workerType;

    if(workerType == 'chef' || workerType == 'waiter' || workerType == 'manager' ){

      const response = await Person.find({work:workerType});
      console.log('response fetched');
      res.status(200).json(response);

    }
    else{
      console.log(error)
      res.status(404).json({error: 'Invalid worker Type'})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }

})

router.put('/:id', async(req, res) => {

  try {
    
    //Extract the id from the URL parameter.
    const personId = req.params.id;
    //Updated data for the person.
    const updatedPersonData = req.body;

    //mongoDB predefined method findByIdAndUpdate.
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true, //return updated new data.
      runValidators: true //check data validation
    });

    if(!response){
      
      return res.status(404).json({error:'Person Not Found'});
      
    }

    console.log("Data Updated Successfully!");
    res.status(200).json(response);

  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }
})


router.delete('/:id', async(req, res) => {
  try{

    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if(!response){ //if valid id not found
      return res.status(404).json({error:'Person Not Found'});
    }
    console.log('Data Delete');
    res.status(200).json({message:'Person deleted Successfully!'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }

});

module.exports = router;