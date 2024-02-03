const express = require('express');
const router = express.Router();
const menuItems = require('../models/menuItems');

//POst route.
router.post('/', async(req, res) => {

  try{

    const data = req.body; 
    const menuObj = new menuItems(data);
    const response = await menuObj.save();
    console.log('Data saved successfully!');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }

})


//GET router
router.get('/', async(req, res) => {

  try{
    const data = await menuItems.find();
    console.log('Data fetched successfully!');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'})
  }
})

router.get('/:itemTaste', async(req, res) => {

  try{

    const itemTaste = req.params.itemTaste;

    if(itemTaste =='Spicy' || itemTaste == 'Sweet' || itemTaste == 'Sour'){
      const response = await menuItems.find({taste:itemTaste});
      console.log('Data fetched successfully!');
      res.status(200).json(response);
    }
    else{
      console.log(error)
      res.status(404).json({error: 'Invalid worker Type'})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'})
  }
})

router.put('/:menuid', async(req, res) => {

  try {
    
    //Extract the id from the URL parameter.
    const menuId = req.params.menuid;
    //Updated data for the MenuItems.
    const updatedMenuData = req.body;

    //mongoDB predefined method findByIdAndUpdate.
    const response = await menuItems.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true, //return updated new data.
      runValidators: true //check data validation
    });

    if(!response){
      return res.status(404).json({error:'MenuItem Not Found'});
    }

    console.log("Data Updated Successfully!");
    res.status(200).json(response);

  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }
})


router.delete('/:menuid', async(req, res) => {
  try{

    const menuId = req.params.menuid;

    const response = await menuItems.findByIdAndDelete(menuId);

    if(!response){ //if valid id not found
      return res.status(404).json({error:'MenuItem Not Found'});
    }
    console.log('Data Delete');
    res.status(200).json({message:'MenuItem deleted Successfully!'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({err:'Internal server error'});
  }

});

module.exports = router;
